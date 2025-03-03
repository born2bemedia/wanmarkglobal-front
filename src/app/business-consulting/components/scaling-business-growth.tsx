import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function ScalingBusinessGrowth() {
  const productsData = await getProducts({
    slug: 'scaling-and-business-growth',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Scaling & Business Growth"
      desc="Expand your business strategically, automate processes, and increase revenue."
    />
  );
}
