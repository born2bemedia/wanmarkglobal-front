'use server';

export async function getPolicy({ id }: { id: string }) {
  const res = await fetch(`${process.env.SERVER_URL}/api/policies/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
}
