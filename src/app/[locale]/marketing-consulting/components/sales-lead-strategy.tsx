import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function SalesLeadStrategy({ locale }: { locale: string }) {
  const t = await getTranslations('marketingConsulting.salesLeadStrategy');

  const productsData = await getProducts({
    slug: 'sales-and-lead-nurturing-strategy',
    locale,
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Sales & Lead Nurturing Strategy' })}
      desc={t('desc', {
        fallback:
          'Turn leads into loyal clients with the right follow-up and conversion tactics.',
      })}
    />
  );
}
