import { apiRpc, getApiClient, InferRequestType } from "./client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Define the RPC endpoint
const $createOrder = apiRpc.orders.$post;
const $createGuestOrder = apiRpc.orders.guest.$post;
const $linkOrder = apiRpc.orders.link.$post;

// Types for the API
export type CreateOrderParams = InferRequestType<typeof $createOrder>["json"];
export type CreateGuestOrderParams = InferRequestType<typeof $createGuestOrder>["json"];
export type LinkOrderParams = InferRequestType<typeof $linkOrder>["json"];

// User orders (authenticated)
export async function getUserOrders() {
  const client = await getApiClient();
  const response = await client.orders.$get();
  return response.json();
}

export async function getOrderById(id: number) {
  const client = await getApiClient();
  const response = await client.orders[":id"].$get({ param: { id: id.toString() } });
  return response.json();
}

export async function createOrder(params: CreateOrderParams) {
  const client = await getApiClient();
  const response = await client.orders.$post({ json: params });
  return response.json();
}

export async function linkGuestOrder(params: LinkOrderParams) {
  const client = await getApiClient();
  const response = await client.orders.link.$post({ json: params });
  return response.json();
}

// Guest orders (unauthenticated)
export async function createGuestOrder(params: CreateGuestOrderParams) {
  // Using apiRpc directly since we don't need auth for guest orders
  const response = await apiRpc.orders.guest.$post({ json: params });
  return response.json();
}

export async function getGuestOrdersByEmail(email: string) {
  // Using apiRpc directly since we don't need auth for guest orders
  const response = await apiRpc.orders.guest.$get({ query: { email } });
  return response.json();
}

// React Query hooks
export function useUserOrders() {
  return useQuery({
    queryKey: ["orders", "user"],
    queryFn: getUserOrders
  });
}

export function useOrderById(id: number) {
  return useQuery({
    queryKey: ["orders", "details", id],
    queryFn: () => getOrderById(id),
    enabled: !!id
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders", "user"] });
    }
  });
}

export function useCreateGuestOrder() {
  return useMutation({
    mutationFn: createGuestOrder
  });
}

export function useLinkGuestOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: linkGuestOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders", "user"] });
    }
  });
}

export function useGuestOrdersByEmail(email: string | null) {
  return useQuery({
    queryKey: ["orders", "guest", email],
    queryFn: () => getGuestOrdersByEmail(email!),
    enabled: !!email
  });
} 