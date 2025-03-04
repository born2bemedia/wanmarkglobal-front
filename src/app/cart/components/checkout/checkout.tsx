'use client';

import { OrderPersonalDetails, OrderSummary } from '@/features/cart/components';

import st from './checkout.module.scss';

export function Checkout() {
  return (
    <section className={st.layout}>
      <OrderSummary />
      <OrderPersonalDetails />
    </section>
  );
}
