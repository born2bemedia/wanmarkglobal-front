'use server';

import { type OriginOrder } from '@/features/account/lib/types';

export async function getUserOrders({
  userID,
}: {
  userID: string;
}): Promise<OriginOrder> {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/orders?where[user.id][in]=${userID}&limit=50`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return res.json();
}
