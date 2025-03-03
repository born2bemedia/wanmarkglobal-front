'use server';

export async function getIcon(url: string) {
  const res = await fetch(`${process.env.SERVER_URL}/${url}`, {
    method: 'GET',
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error('Failed to fetch icon:', res.statusText);
    return null;
  }

  return await res.text();
}
