'use server';

export async function resetPassword(email: string) {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/users/forgot-password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    },
  );
  return await res.json();
}
