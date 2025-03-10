'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieInst = await cookies();

  cookieInst.delete('token');
  cookieInst.delete('user');

  redirect('/');
}
