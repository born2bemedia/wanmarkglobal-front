'use client';

import type { CartProduct, OrderBilling } from '@/features/cart/lib/types';

export async function createOrder({
  products,
  billing,
  totalPrice,
}: {
  billing: OrderBilling;
  products: CartProduct[];
  totalPrice: number;
}) {
  const items = products.map(({ id, price }) => ({
    product: id,
    price,
    quantity: 1,
  }));

  const res = await fetch(`http://localhost:3001/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      orderNumber: String(Date.now()),
      billingAddress: billing,
      total: totalPrice,
      status: 'pending',
      items,
    }),
  });
  return await res.json();
}
