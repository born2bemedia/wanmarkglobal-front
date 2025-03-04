'use server';

import { OriginCase } from '../lib';

export async function getCases(): Promise<OriginCase[]> {
  const res = await fetch(`${process.env.SERVER_URL}/api/cases`, {
    method: 'GET',
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error('Failed to fetch products:', res.statusText);
    return [];
  }

  const results = await res.json();
  return results?.docs ?? [];
}
