import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function ClientAcquisition() {
  const productsData = await getProducts({
    slug: 'client-acquisition-and-sales-strategy',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Client Acquisition & Sales Strategy"
      desc="Develop a structured approach to attract and convert customers effectively."
    />
  );
}
