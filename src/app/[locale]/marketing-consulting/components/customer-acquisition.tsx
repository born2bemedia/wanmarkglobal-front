import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function CustomerAcquisition({ locale }: { locale: string }) {
  const t = await getTranslations('marketingConsulting.customerAcquisition');

  const productsData = await getProducts({
    slug: 'paid-advertising-and-customer-acquisition',
    locale,
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', {
        fallback: 'Paid Advertising & Customer Acquisition',
      })}
      desc={t('desc', {
        fallback:
          'Launch data-driven ad campaigns that bring in real, paying customers.',
      })}
    />
  );
}
