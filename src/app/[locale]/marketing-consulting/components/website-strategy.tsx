import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function WebsiteStrategy() {
  const productsData = await getProducts({
    slug: 'online-presence-and-website-strategy',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Online Presence & Website Strategy"
      desc="Turn your website into a lead-generating machine, not just an online brochure."
    />
  );
}
