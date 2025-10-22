import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

import st from './refund-policy.module.scss';

export const metadata: Metadata = {
  title: 'Refund Policy | Wanmark Global',
  openGraph: {
    title: 'Refund Policy | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function RefundPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('policies.refund');

  const res = await getPolicy({ id: '4', locale });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );

  return (
    <main>
      <PolicyHero
        title={{
          value: t('title', { fallback: 'Refund Policy' }),
          color: 'green',
        }}
        hint={{ value: lastUpdate ?? '', color: 'green' }}
        color="#C1EFBE"
      />
      <PolicyLayout className={st.layout}>{elements}</PolicyLayout>
    </main>
  );
}
