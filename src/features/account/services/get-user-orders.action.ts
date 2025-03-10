'use server';

import { cookies } from 'next/headers';

import { type OriginOrder } from '@/features/account/lib/types';

export async function getUserOrders(): Promise<OriginOrder> {
  const cookieInst = await cookies();

  const user = cookieInst.get('user')?.value;
  const userID = JSON.parse(user ?? '').id;

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
