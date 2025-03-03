import { OrderForm } from '@/features/order-product-form/components';
import { servicesMapping } from '@/features/order-product-form/lib';
import { getProducts } from '@/features/product/services';

import { PackageInfo } from './package-info';
import st from './package-request-form.module.scss';

export async function PackageRequestForm() {
  const products = (
    await Promise.all([
      getProducts({ slug: 'business-setup-and-structure' }),
      getProducts({ slug: 'operations-and-efficiency' }),
      getProducts({ slug: 'scaling-and-business-growth' }),
      getProducts({ slug: 'client-acquisition-and-sales-strategy' }),
    ])
  ).flat();
  const services = await servicesMapping(products);

  return (
    <section className={st.layout}>
      <PackageInfo />
      <OrderForm type="Business Consulting" services={services} />
    </section>
  );
}
