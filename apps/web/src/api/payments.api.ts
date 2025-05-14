import { apiRpc, getApiClient, InferRequestType } from "./client";
import { useQuery, useMutation } from "@tanstack/react-query";

// Define the RPC endpoints
const $createCheckout = apiRpc.payments.checkout.$post;
const $capturePayment = apiRpc.payments.capture.$post;

// Types for the API
export type CreateCheckoutParams = InferRequestType<typeof $createCheckout>["json"];
export type CapturePaymentParams = InferRequestType<typeof $capturePayment>["json"];

// Payment functions
export async function createPaypalCheckout(params: CreateCheckoutParams) {
  // Using apiRpc directly since this can be used for both guest and logged-in users
  const response = await apiRpc.payments.checkout.$post({ json: params });
  return response.json();
}

export async function capturePaypalPayment(params: CapturePaymentParams) {
  // Using apiRpc directly since this can be used for both guest and logged-in users
  const response = await apiRpc.payments.capture.$post({ json: params });
  return response.json();
}

export async function getOrderPayments(orderId: number) {
  const client = await getApiClient();
  const response = await client.payments.orders[":orderId"].$get({ 
    param: { orderId: orderId.toString() } 
  });
  return response.json();
}

// React Query hooks
export function useCreatePaypalCheckout() {
  return useMutation({
    mutationFn: createPaypalCheckout
  });
}

export function useCapturePaypalPayment() {
  return useMutation({
    mutationFn: capturePaypalPayment
  });
}

export function useOrderPayments(orderId: number) {
  return useQuery({
    queryKey: ["payments", "order", orderId],
    queryFn: () => getOrderPayments(orderId),
    enabled: !!orderId
  });
} 