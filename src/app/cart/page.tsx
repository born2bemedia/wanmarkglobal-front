import type { Metadata } from 'next';

import { Hero } from './components/hero';
import { Checkout } from '@/app/cart/components/checkout';

export const metadata: Metadata = {
  title: 'Cart | Wanmark Global',
  openGraph: {
    title: 'Cart | Wanmark Global',
  },
  robots: 'noindex',
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Checkout />
    </main>
  );
}
