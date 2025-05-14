import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { orderService } from "./orders.service";
import { auth, requireAuth, getUserId } from "../../pkg/middleware/clerk-auth";
import { orderInsertSchema, orderItemInsertSchema } from "@repo/db";

// Custom schema for creating orders with string decimal values
const createOrderSchema = z.object({
  subtotal: z.string(),
  total: z.string(),
  tax: z.string().optional(),
  shipping: z.string().optional(),
  guestEmail: z.string().email().optional(),
  shippingAddress: z.record(z.any()).optional(),
  billingAddress: z.record(z.any()).optional(),
  items: z.array(
    z.object({
      productName: z.string(),
      productId: z.string().optional(),
      quantity: z.string(),
      price: z.string()
    })
  )
});

// Schema for linking guest orders
const linkOrderSchema = z.object({
  token: z.string()
});

// Schema for fetching guest orders
const guestOrdersSchema = z.object({
  email: z.string().email()
});

export const orderRoutes = new Hono()
  // Routes that don't require authentication
  .post("/guest", zValidator("json", createOrderSchema), async (c) => {
    try {
      const data = c.req.valid("json");
      
      // Ensure this is a guest order by requiring email
      if (!data.guestEmail) {
        return c.json({ error: "Guest email is required" }, 400);
      }
      
      const order = await orderService.createOrder({
        ...data,
        // Ensure no user ID is set
        userId: undefined
      });
      
      return c.json(order);
    } catch (error) {
      console.error("Error creating guest order:", error);
      return c.json({ error: "Failed to create order" }, 500);
    }
  })
  
  .get("/guest", zValidator("query", guestOrdersSchema), async (c) => {
    try {
      const { email } = c.req.valid("query");
      const orders = await orderService.getOrdersByEmail(email);
      return c.json(orders);
    } catch (error) {
      console.error("Error fetching guest orders:", error);
      return c.json({ error: "Failed to fetch orders" }, 500);
    }
  })
  
  // Routes that require authentication
  .use(auth(), requireAuth)
  
  .post("/", zValidator("json", createOrderSchema), async (c) => {
    try {
      const data = c.req.valid("json");
      const userId = getUserId(c);
      
      const order = await orderService.createOrder({
        ...data,
        userId
      });
      
      return c.json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      return c.json({ error: "Failed to create order" }, 500);
    }
  })
  
  .get("/", async (c) => {
    try {
      const userId = getUserId(c);
      const orders = await orderService.getUserOrders(userId);
      return c.json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      return c.json({ error: "Failed to fetch orders" }, 500);
    }
  })
  
  .get("/:id", async (c) => {
    try {
      const id = parseInt(c.req.param("id"), 10);
      if (isNaN(id)) {
        return c.json({ error: "Invalid order ID" }, 400);
      }
      
      const order = await orderService.getOrderById(id);
      if (!order) {
        return c.json({ error: "Order not found" }, 404);
      }
      
      // Check if the order belongs to the current user
      const userId = getUserId(c);
      if (order.userId && order.userId !== userId) {
        return c.json({ error: "Unauthorized" }, 403);
      }
      
      return c.json(order);
    } catch (error) {
      console.error("Error fetching order:", error);
      return c.json({ error: "Failed to fetch order" }, 500);
    }
  })
  
  .post("/link", zValidator("json", linkOrderSchema), async (c) => {
    try {
      const { token } = c.req.valid("json");
      const userId = getUserId(c);
      
      const result = await orderService.linkGuestOrderToUser(token, userId);
      return c.json({ success: result });
    } catch (error) {
      console.error("Error linking order:", error);
      return c.json({ error: "Failed to link order" }, 500);
    }
  }); 