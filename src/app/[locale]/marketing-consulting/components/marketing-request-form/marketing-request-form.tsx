import { OrderForm } from '@/features/order-product-form/components';
import { servicesMapping } from '@/features/order-product-form/lib';
import { getProducts } from '@/features/product/services';

import st from './marketing-request-form.module.scss';
import { RequestInfo } from './request-info';

export async function MarketingRequestForm({ locale }: { locale: string }) {
  const products = (
    await Promise.all([
      getProducts({ slug: 'brand-and-market-positioning', locale }),
      getProducts({
        slug: 'paid-advertising-and-customer-acquisition',
        locale,
      }),
      getProducts({ slug: 'sales-and-lead-nurturing-strategy', locale }),
      getProducts({ slug: 'social-media-and-content-strategy', locale }),
      getProducts({ slug: 'online-presence-and-website-strategy', locale }),
    ])
  ).flat();
  const services = await servicesMapping(products);

  return (
    <section className={st.layout} id="order-form">
      <RequestInfo />
      <OrderForm type="Marketing Consulting" services={services} />
    </section>
  );
}
