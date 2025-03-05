'use client';

import { Content } from './components/content';
import { Hero } from '@/app/cart/components/hero';

export default function ThankYou() {
  return (
    <main>
      <Hero title="Thank You for Your Order!" />
      <Content />
    </main>
  );
}
