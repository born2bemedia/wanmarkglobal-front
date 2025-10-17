import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function CustomerAcquisition() {
  const productsData = await getProducts({
    slug: 'paid-advertising-and-customer-acquisition',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Paid Advertising & Customer Acquisition"
      desc="Launch data-driven ad campaigns that bring in real, paying customers."
    />
  );
}
