import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

import st from './cookie-policy.module.scss';

export const metadata: Metadata = {
  title: 'Cookie Policy | Wanmark Global',
  openGraph: {
    title: 'Cookie Policy | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function PrivacyPolicy() {
  const t = await getTranslations('policies.cookie');

  const res = await getPolicy({ id: '3' });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );

  return (
    <main>
      <PolicyHero
        title={{
          value: t('title', { fallback: 'Cookie Policy' }),
          color: 'darkPurple',
        }}
        hint={{ value: lastUpdate ?? '', color: 'darkPurple' }}
        color="#FFD2FB"
      />
      <PolicyLayout className={st.layout}>{elements}</PolicyLayout>
    </main>
  );
}
