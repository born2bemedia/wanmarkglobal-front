import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function ScalingBusinessGrowth() {
  const t = await getTranslations('businessConsulting.scalingBusinessGrowth');

  const productsData = await getProducts({
    slug: 'scaling-and-business-growth',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Scaling & Business Growth' })}
      desc={t('desc', {
        fallback:
          'Expand your business strategically, automate processes, and increase revenue.',
      })}
    />
  );
}
