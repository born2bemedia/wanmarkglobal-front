import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function BrandMarketPositioning() {
  const productsData = await getProducts({
    slug: 'brand-and-market-positioning',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Brand & Market Positioning"
      desc="Define your place in the market and make your brand stand out."
    />
  );
}
