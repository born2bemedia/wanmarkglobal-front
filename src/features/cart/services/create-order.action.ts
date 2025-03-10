'use server';

import type { User } from '@/core/user/lib/types';

import type { CartProduct, OrderBilling } from '../lib/types';

export async function createOrder({
  products,
  billing,
  totalPrice,
  user,
}: {
  billing: OrderBilling;
  products: CartProduct[];
  totalPrice: number;
  user: User | null;
}) {
  const items = products.map(({ id, price }) => ({
    product: id,
    price,
    quantity: 1,
  }));

  const res = await fetch(`${process.env.SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      orderNumber: String(Date.now()),
      billingAddress: billing,
      total: totalPrice,
      status: 'pending',
      items,
    }),
  });
  return await res.json();
}
