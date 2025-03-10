'use server';

import { ChangePasswordSchema } from '@/core/user/lib';

export async function changePassword({
  password,
  confirmPassword,
  userID,
}: ChangePasswordSchema & { userID: number }) {
  const res = await fetch(`${process.env.SERVER_URL}/api/users/${userID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, confirmPassword }),
  });

  return await res.json();
}
