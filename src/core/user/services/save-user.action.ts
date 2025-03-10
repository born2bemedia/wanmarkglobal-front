'use server';

import { cookies } from 'next/headers';

import { UserSchema } from '@/core/user/lib';

export async function saveUser(args: Partial<UserSchema> & { userID: number }) {
  const cookieInst = await cookies();

  const res = await fetch(
    `${process.env.SERVER_URL}/api/users/${args.userID}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    },
  );
  const data = await res.json();

  cookieInst.set('user', JSON.stringify(data.doc));

  return data;
}
