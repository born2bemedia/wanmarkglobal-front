import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function OperationsAndEfficiency() {
  const t = await getTranslations('businessConsulting.operationsAndEfficiency');

  const productsData = await getProducts({
    slug: 'operations-and-efficiency',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Operations & Efficiency' })}
      desc={t('desc', {
        fallback:
          'Eliminate inefficiencies and structure your daily workflow for maximum productivity.',
      })}
    />
  );
}
