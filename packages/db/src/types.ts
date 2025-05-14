import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import * as schema from "./schema";

export type Post = InferSelectModel<typeof schema.posts>;
export type NewPost = InferInsertModel<typeof schema.posts>;

export const postInsertSchema = createInsertSchema(schema.posts).omit({ userId: true });
export const postSelectSchema = createSelectSchema(schema.posts);

// Types for the order system
export type Order = InferSelectModel<typeof schema.orders>;
export type NewOrder = InferInsertModel<typeof schema.orders>;
export type Payment = InferSelectModel<typeof schema.payments>;
export type NewPayment = InferInsertModel<typeof schema.payments>;
export type OrderItem = InferSelectModel<typeof schema.orderItems>;
export type NewOrderItem = InferInsertModel<typeof schema.orderItems>;
export type GuestOrder = InferSelectModel<typeof schema.guestOrders>;
export type NewGuestOrder = InferInsertModel<typeof schema.guestOrders>;

// Zod schemas for validation
export const orderInsertSchema = createInsertSchema(schema.orders)
  .omit({ id: true })
  .partial({
    userId: true,
    tax: true,
    shipping: true,
    shippingAddress: true,
    billingAddress: true,
    metadata: true
  });

export const orderSelectSchema = createSelectSchema(schema.orders);

export const paymentInsertSchema = createInsertSchema(schema.payments)
  .omit({ id: true })
  .partial({
    paypalTransactionId: true,
    paypalOrderId: true,
    paypalResponse: true
  });

export const paymentSelectSchema = createSelectSchema(schema.payments);

export const orderItemInsertSchema = createInsertSchema(schema.orderItems)
  .omit({ id: true })
  .partial({
    productId: true
  });

export const orderItemSelectSchema = createSelectSchema(schema.orderItems);

export const guestOrderInsertSchema = createInsertSchema(schema.guestOrders)
  .omit({ id: true, isLinked: true, linkedUserId: true });

export const guestOrderSelectSchema = createSelectSchema(schema.guestOrders);
