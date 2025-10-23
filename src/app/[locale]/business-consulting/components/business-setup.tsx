import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function BusinessSetup({ locale }: { locale: string }) {
  const t = await getTranslations('businessConsulting.setup');

  const productsData = await getProducts({
    slug: 'business-setup-and-structure',
    locale,
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Business Setup & Structure' })}
      desc={t('desc', {
        fallback:
          'Lay the groundwork for a legally sound, financially stable, and well-organized business.',
      })}
    />
  );
}
