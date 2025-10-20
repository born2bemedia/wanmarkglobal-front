import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

export const metadata: Metadata = {
  title: 'Terms of Use | Wanmark Global',
  openGraph: {
    title: 'Terms of Use | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function TermsOfUse() {
  const t = await getTranslations('policies.terms');

  const res = await getPolicy({ id: '1' });
  const { elements } = parseJSONToElements(res.content.root.children);

  return (
    <main>
      <PolicyHero
        title={{
          value: t('title', { fallback: 'Terms of Use' }),
          color: 'blackPurple',
        }}
        color="#D3CBFF"
      />
      <PolicyLayout>{elements}</PolicyLayout>
    </main>
  );
}
