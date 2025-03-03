import { OrderForm } from '@/features/order-product-form/components';
import { servicesMapping } from '@/features/order-product-form/lib';
import { getProducts } from '@/features/product/services';

import st from './marketing-request-form.module.scss';
import { RequestInfo } from './request-info';

export async function MarketingRequestForm() {
  const products = (
    await Promise.all([
      getProducts({ slug: 'brand-and-market-positioning' }),
      getProducts({ slug: 'paid-advertising-and-customer-acquisition' }),
      getProducts({ slug: 'sales-and-lead-nurturing-strategy' }),
      getProducts({ slug: 'social-media-and-content-strategy' }),
      getProducts({ slug: 'online-presence-and-website-strategy' }),
    ])
  ).flat();
  const services = await servicesMapping(products);

  return (
    <section className={st.layout}>
      <RequestInfo />
      <OrderForm type="Business Consulting" services={services} />
    </section>
  );
}
