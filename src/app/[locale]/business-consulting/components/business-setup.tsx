import { ProductList } from '@/features/product/components';
import { productsMapping } from '@/features/product/lib';
import { getProducts } from '@/features/product/services';

export async function BusinessSetup() {
  const productsData = await getProducts({
    slug: 'business-setup-and-structure',
  });
  const products = await productsMapping(productsData);

  return (
    <ProductList
      products={products}
      title="Business Setup & Structure"
      desc="Lay the groundwork for a legally sound, financially stable, and well-organized business."
    />
  );
}
