'use server';

import { login } from '@/core/auth/services/login.action';

import { RegisterSchema } from '../lib/register.schema';

type UserDTO = Omit<RegisterSchema, 'retypePassword'>;

export async function register(userDTO: UserDTO) {
  const res = await fetch(`${process.env.SERVER_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...userDTO, role: 'customer' }),
  });
  const result = await res.json();

  if (!result.errors) {
    return await login({ email: userDTO.email, password: userDTO.password });
  } else {
    return result;
  }
}
