'use server';

import { OriginCase } from '../lib';

export async function getCases({
  params = { locale: 'en' },
}: {
  params?: { locale: string };
}): Promise<OriginCase[]> {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/cases?locale=${params?.locale}`,
    {
      method: 'GET',
    },
  );

  if (!res.ok) {
    console.error('Failed to fetch products:', res.statusText);
    return [];
  }

  const results = await res.json();
  return results?.docs ?? [];
}
