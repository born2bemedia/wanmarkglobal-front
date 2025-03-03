import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function SocialContentStrategy() {
  const productsData = await getProducts({
    slug: 'social-media-and-content-strategy',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Social Media & Content Strategy"
      desc="Build an online presence that attracts and engages your audience."
    />
  );
}
