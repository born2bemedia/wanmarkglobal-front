import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function SalesLeadStrategy() {
  const productsData = await getProducts({
    slug: 'sales-and-lead-nurturing-strategy',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Sales & Lead Nurturing Strategy"
      desc="Turn leads into loyal clients with the right follow-up and conversion tactics."
    />
  );
}
