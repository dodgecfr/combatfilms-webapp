import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { paymentService } from "./payments.service";
import { auth, requireAuth, getUserId } from "../../pkg/middleware/clerk-auth";

// Schema for creating a checkout session
const createCheckoutSchema = z.object({
  orderId: z.number()
});

// Schema for capturing a payment
const capturePaymentSchema = z.object({
  orderId: z.number(),
  paypalOrderId: z.string()
});

// PayPal webhook schema
const webhookSchema = z.record(z.any());

export const paymentRoutes = new Hono()
  // Routes that don't require authentication for guest checkout
  .post("/checkout", zValidator("json", createCheckoutSchema), async (c) => {
    try {
      const { orderId } = c.req.valid("json");
      
      // Create a PayPal checkout session
      const checkout = await paymentService.createPaypalCheckout(orderId);
      
      return c.json(checkout);
    } catch (error) {
      console.error("Error creating checkout:", error);
      return c.json({ error: "Failed to create checkout" }, 500);
    }
  })
  
  .post("/capture", zValidator("json", capturePaymentSchema), async (c) => {
    try {
      const { orderId, paypalOrderId } = c.req.valid("json");
      
      // Capture the payment
      const result = await paymentService.capturePaypalPayment(paypalOrderId, orderId);
      
      return c.json(result);
    } catch (error) {
      console.error("Error capturing payment:", error);
      return c.json({ error: "Failed to capture payment" }, 500);
    }
  })
  
  // PayPal webhook
  .post("/webhook/paypal", zValidator("json", webhookSchema), async (c) => {
    try {
      const data = c.req.valid("json");
      
      // In a real implementation, you'd verify the webhook signature here
      
      // Process the webhook
      const result = await paymentService.handlePaypalWebhook(data);
      
      return c.json(result);
    } catch (error) {
      console.error("Error processing webhook:", error);
      return c.json({ error: "Failed to process webhook" }, 500);
    }
  })
  
  // Routes that require authentication
  .use(auth(), requireAuth)
  
  .get("/orders/:orderId", async (c) => {
    try {
      const orderId = parseInt(c.req.param("orderId"), 10);
      if (isNaN(orderId)) {
        return c.json({ error: "Invalid order ID" }, 400);
      }
      
      const payments = await paymentService.getPaymentByOrderId(orderId);
      
      return c.json(payments);
    } catch (error) {
      console.error("Error fetching payments:", error);
      return c.json({ error: "Failed to fetch payments" }, 500);
    }
  }); 