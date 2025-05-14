"use client";

import { useState } from "react";
import { useGuestOrdersByEmail, useLinkGuestOrder } from "@/api/orders.api";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Define the order type
interface GuestOrder {
  id: number;
  orderNumber: string;
  total: string;
  createdAt: string;
  token: string;
  isLinked: boolean;
}

export function LinkGuestOrders() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || null;
  const { data: guestOrders, isLoading, isError } = useGuestOrdersByEmail(email);
  const linkOrderMutation = useLinkGuestOrder();
  
  const handleLinkOrder = async (token: string) => {
    try {
      await linkOrderMutation.mutateAsync({ token });
      toast.success("Order linked to your account successfully!");
    } catch (error) {
      console.error("Error linking order:", error);
      toast.error("Failed to link order to your account");
    }
  };
  
  if (isLoading) {
    return <div className="text-center py-4">Loading your guest orders...</div>;
  }
  
  if (isError) {
    return <div className="text-center py-4 text-red-500">Error loading guest orders</div>;
  }
  
  // Check if we have orders and if it's an error response
  if (!guestOrders || 'error' in guestOrders) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Link Previous Orders</CardTitle>
          <CardDescription>
            No guest orders found for your email address.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  // Ensure guestOrders is an array
  const ordersArray = Array.isArray(guestOrders) ? guestOrders : [];
  
  // Filter to only show unlinked orders
  const unlinkedOrders = ordersArray.filter((order: GuestOrder) => !order.isLinked);
  
  if (unlinkedOrders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Link Previous Orders</CardTitle>
          <CardDescription>
            All your guest orders have been linked to your account.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Link Previous Orders</CardTitle>
        <CardDescription>
          We found the following orders made with your email address. Link them to your account to keep track of all your purchases.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {unlinkedOrders.map((order: GuestOrder) => (
            <div key={order.token} className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-medium">Order #{order.orderNumber}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString()} • ${order.total}
                </p>
              </div>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => handleLinkOrder(order.token)}
                disabled={linkOrderMutation.isPending}
              >
                Link to Account
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 