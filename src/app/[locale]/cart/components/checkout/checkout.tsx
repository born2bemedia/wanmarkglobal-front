'use client';

import dynamic from 'next/dynamic';

import st from './checkout.module.scss';

const OrderSummary = dynamic(
  () =>
    import('@/features/cart/components/order-summary').then(
      mod => mod.OrderSummary,
    ),
  {
    ssr: false,
  },
);

const OrderPersonalDetails = dynamic(
  () =>
    import('@/features/cart/components/order-personal-details').then(
      mod => mod.OrderPersonalDetails,
    ),
  {
    ssr: false,
  },
);

export function Checkout() {
  return (
    <section className={st.layout}>
      <OrderSummary />
      <OrderPersonalDetails />
    </section>
  );
}
