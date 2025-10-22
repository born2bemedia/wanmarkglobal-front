import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function BrandMarketPositioning() {
  const t = await getTranslations('marketingConsulting.brandMarketPositioning');

  const productsData = await getProducts({
    slug: 'brand-and-market-positioning',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Brand & Market Positioning' })}
      desc={t('desc', {
        fallback:
          'Define your place in the market and make your brand stand out.',
      })}
    />
  );
}
