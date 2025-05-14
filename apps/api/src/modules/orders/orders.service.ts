import { db, eq, and, orders, payments, orderItems as orderItemsTable, guestOrders, users } from "@repo/db";
import { 
  type NewOrder, type NewPayment, type NewOrderItem, type NewGuestOrder
} from "@repo/db";
import { generateRandomString } from "../../pkg/util/string";

export const orderService = {
  async createOrder(orderData: Omit<NewOrder, "id" | "orderNumber"> & { items: Omit<NewOrderItem, "id" | "orderId">[] }) {
    const { items, ...order } = orderData;
    
    // Generate a unique order number
    const orderNumber = `ORD-${Date.now()}-${generateRandomString(6)}`;
    
    return db.transaction(async (tx) => {
      // Create the order
      const [newOrder] = await tx
        .insert(orders)
        .values({ ...order, orderNumber })
        .returning();
      
      if (!newOrder) {
        throw new Error("Failed to create order");
      }
      
      // Insert order items
      if (items.length > 0) {
        await tx
          .insert(orderItemsTable)
          .values(
            items.map(item => ({
              ...item,
              orderId: newOrder.id
            }))
          );
      }
      
      // If it's a guest order (no userId), create a guest order entry with a token
      if (!order.userId && order.guestEmail) {
        const token = generateRandomString(32);
        await tx
          .insert(guestOrders)
          .values({
            orderId: newOrder.id,
            email: order.guestEmail,
            token
          });
      }
      
      return newOrder;
    });
  },
  
  async getOrderById(id: number) {
    const order = await db
      .select()
      .from(orders)
      .where(eq(orders.id, id))
      .limit(1);
      
    if (order.length === 0) {
      return null;
    }
    
    const items = await db
      .select()
      .from(orderItemsTable)
      .where(eq(orderItemsTable.orderId, id));
      
    return {
      ...order[0],
      items
    };
  },
  
  async getUserOrders(userId: string) {
    return db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId))
      .orderBy(orders.createdAt);
  },
  
  async linkGuestOrderToUser(token: string, userId: string) {
    return db.transaction(async (tx) => {
      // Find the guest order by token
      const guestOrder = await tx
        .select()
        .from(guestOrders)
        .where(
          and(
            eq(guestOrders.token, token), 
            eq(guestOrders.isLinked, false)
          )
        )
        .limit(1);
        
      if (guestOrder.length === 0) {
        throw new Error("Invalid or already linked order");
      }
      
      // Get user email
      const user = await tx
        .select()
        .from(users)
        .where(eq(users.userId, userId))
        .limit(1);
        
      if (user.length === 0) {
        throw new Error("User not found");
      }
      
      // Update the order to associate it with the user
      await tx
        .update(orders)
        .set({ userId })
        .where(eq(orders.id, guestOrder[0]!.orderId)); // Assert non-null after check
        
      // Mark the guest order as linked
      await tx
        .update(guestOrders)
        .set({ 
          isLinked: true,
          linkedUserId: userId
        })
        .where(eq(guestOrders.id, guestOrder[0]!.id)); // Assert non-null after check
        
      return true;
    });
  },
  
  async getOrdersByEmail(email: string) {
    // This gets orders made as guest with a specific email
    const guestOrdersData = await db
      .select({
        orderId: guestOrders.orderId,
        token: guestOrders.token,
        isLinked: guestOrders.isLinked
      })
      .from(guestOrders)
      .where(eq(guestOrders.email, email));
      
    if (guestOrdersData.length === 0) {
      return [];
    }
    
    const orderIds = guestOrdersData.map(o => o.orderId);
    
    const ordersData = await db
      .select()
      .from(orders)
      .innerJoin(guestOrders, eq(orders.id, guestOrders.orderId))
      .where(eq(guestOrders.email, email));
      
    return ordersData.map(order => {
      const guestOrder = guestOrdersData.find(go => go.orderId === order.orders.id);
      return {
        ...order.orders,
        token: guestOrder?.token,
        isLinked: guestOrder?.isLinked
      };
    });
  }
}; 