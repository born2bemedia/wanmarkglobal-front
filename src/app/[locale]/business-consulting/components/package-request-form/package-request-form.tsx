import { OrderForm } from '@/features/order-product-form/components';
import { servicesMapping } from '@/features/order-product-form/lib';
import { getProducts } from '@/features/product/services';

import { PackageInfo } from './package-info';
import st from './package-request-form.module.scss';

export async function PackageRequestForm({ locale }: { locale: string }) {
  const products = (
    await Promise.all([
      getProducts({ slug: 'business-setup-and-structure', locale }),
      getProducts({ slug: 'operations-and-efficiency', locale }),
      getProducts({ slug: 'scaling-and-business-growth', locale }),
      getProducts({ slug: 'client-acquisition-and-sales-strategy', locale }),
    ])
  ).flat();
  const services = await servicesMapping(products);

  return (
    <section className={st.layout} id="order-form">
      <PackageInfo />
      <OrderForm type="Business Consulting" services={services} />
    </section>
  );
}
