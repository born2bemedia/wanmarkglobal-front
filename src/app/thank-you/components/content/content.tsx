'use client';

import { NextSteps } from '../next-steps';
import { OrderGreeting } from '../order-greeting';
import st from './content.module.scss';

export function Content() {
  return (
    <section className={st.layout}>
      <OrderGreeting />
      <NextSteps />
    </section>
  );
}
