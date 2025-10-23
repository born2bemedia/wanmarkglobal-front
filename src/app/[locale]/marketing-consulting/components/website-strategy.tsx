import { getTranslations } from 'next-intl/server';

import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function WebsiteStrategy({ locale }: { locale: string }) {
  const t = await getTranslations('marketingConsulting.websiteStrategy');

  const productsData = await getProducts({
    slug: 'online-presence-and-website-strategy',
    locale,
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title={t('title', { fallback: 'Online Presence & Website Strategy' })}
      desc={t('desc', {
        fallback:
          'Turn your website into a lead-generating machine, not just an online brochure.',
      })}
    />
  );
}
