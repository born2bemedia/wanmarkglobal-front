'use server';

import { OriginProduct } from '@/features/product/lib';

export async function getProducts({
  slug,
}: {
  slug: string;
}): Promise<OriginProduct[]> {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/products?where[category.slug][in]=${slug}`,
    {
      method: 'GET',
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    console.error('Failed to fetch products:', res.statusText);
    return [];
  }

  const results = await res.json();
  return results?.docs ?? [];
}
