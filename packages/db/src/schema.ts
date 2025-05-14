import { pgTable, text, timestamp, varchar, decimal, jsonb, boolean, serial } from "drizzle-orm/pg-core";
import { lifecycleDates } from "./util/lifecycle-dates";
export const users = pgTable("users", {
  userId: varchar("user_id", { length: 128 }).primaryKey(),
  // Add more clerk fields you want to sync here
  email: text("email").notNull(),
  ...lifecycleDates,
});

export const posts = pgTable("posts", {
  id: varchar("id", { length: 255 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => users.userId),
  ...lifecycleDates,
});

// New tables for guest checkout and PayPal integration
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  orderNumber: varchar("order_number", { length: 64 }).notNull().unique(),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
  total: decimal("total", { precision: 10, scale: 2 }).notNull(),
  tax: decimal("tax", { precision: 10, scale: 2 }),
  shipping: decimal("shipping", { precision: 10, scale: 2 }),
  // For guest checkout, userId is optional
  userId: varchar("user_id", { length: 128 }).references(() => users.userId),
  // For guest checkout, we store email for order confirmation
  guestEmail: text("guest_email"),
  shippingAddress: jsonb("shipping_address"),
  billingAddress: jsonb("billing_address"),
  metadata: jsonb("metadata"),
  ...lifecycleDates,
});

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  orderId: serial("order_id").references(() => orders.id).notNull(),
  paymentMethod: varchar("payment_method", { length: 50 }).notNull().default("paypal"),
  paymentStatus: varchar("payment_status", { length: 50 }).notNull().default("pending"),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  // PayPal specific fields
  paypalTransactionId: varchar("paypal_transaction_id", { length: 255 }),
  paypalOrderId: varchar("paypal_order_id", { length: 255 }),
  paypalResponse: jsonb("paypal_response"),
  ...lifecycleDates,
});

// Table to store items in an order
export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: serial("order_id").references(() => orders.id).notNull(),
  productName: varchar("product_name", { length: 255 }).notNull(),
  productId: varchar("product_id", { length: 255 }),
  quantity: decimal("quantity", { precision: 10, scale: 2 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  ...lifecycleDates,
});

// This table helps link guest orders to user accounts after account creation
export const guestOrders = pgTable("guest_orders", {
  id: serial("id").primaryKey(),
  orderId: serial("order_id").references(() => orders.id).notNull(),
  email: text("email").notNull(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  isLinked: boolean("is_linked").default(false),
  linkedUserId: varchar("linked_user_id", { length: 128 }).references(() => users.userId),
  ...lifecycleDates,
});
