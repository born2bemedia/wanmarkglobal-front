import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function OperationsAndEfficiency() {
  const productsData = await getProducts({
    slug: 'operations-and-efficiency',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Operations & Efficiency"
      desc="Eliminate inefficiencies and structure your daily workflow for maximum productivity."
    />
  );
}
