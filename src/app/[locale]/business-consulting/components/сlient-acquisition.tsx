import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function ClientAcquisition() {
  const t = await getTranslations('businessConsulting.clientAcquisition');

  const productsData = await getProducts({
    slug: 'client-acquisition-and-sales-strategy',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Client Acquisition & Sales Strategy' })}
      desc={t('desc', {
        fallback:
          'Develop a structured approach to attract and convert customers effectively.',
      })}
    />
  );
}
