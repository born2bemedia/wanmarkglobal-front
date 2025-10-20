import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Content } from './components/content';
import { Hero } from '@/app/[locale]/cart/components/hero';

export const metadata: Metadata = {
  title: 'Thank You | Wanmark Global',
  openGraph: {
    title: 'Thank You | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function ThankYou() {
  const t = await getTranslations('thankYou.hero');

  return (
    <main>
      <Hero title={t('title', { fallback: 'Thank You for Your Order!' })} />
      <Content />
    </main>
  );
}
