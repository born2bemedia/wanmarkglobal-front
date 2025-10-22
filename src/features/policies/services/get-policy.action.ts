'use server';

export async function getPolicy({
  id,
  locale,
}: {
  id: string;
  locale: string;
}) {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/policies/${id}?locale=${locale}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return await res.json();
}
