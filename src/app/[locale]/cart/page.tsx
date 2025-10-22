import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Hero } from './components/hero';
import { Checkout } from '@/app/[locale]/cart/components/checkout';

export const metadata: Metadata = {
  title: 'Cart | Wanmark Global',
  openGraph: {
    title: 'Cart | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function Page() {
  const t = await getTranslations('cart.hero');

  return (
    <main>
      <Hero title={t('title', { fallback: 'Your Selected Services' })} />
      <Checkout />
    </main>
  );
}
