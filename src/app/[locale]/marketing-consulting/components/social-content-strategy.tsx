import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function SocialContentStrategy({ locale }: { locale: string }) {
  const t = await getTranslations('marketingConsulting.socialContentStrategy');

  const productsData = await getProducts({
    slug: 'social-media-and-content-strategy',
    locale,
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Social Media & Content Strategy' })}
      desc={t('desc', {
        fallback:
          'Build an online presence that attracts and engages your audience.',
      })}
    />
  );
}
