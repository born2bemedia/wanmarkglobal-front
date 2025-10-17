import type { Metadata } from 'next';

import { Content } from './components/content';
import { Hero } from '@/app/[locale]/cart/components/hero';

export const metadata: Metadata = {
  title: 'Thank You | Wanmark Global',
  openGraph: {
    title: 'Thank You | Wanmark Global',
  },
  robots: 'noindex',
};

export default function ThankYou() {
  return (
    <main>
      <Hero title="Thank You for Your Order!" />
      <Content />
    </main>
  );
}
