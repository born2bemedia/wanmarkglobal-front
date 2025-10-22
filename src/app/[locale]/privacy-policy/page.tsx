import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

import st from './privacy-policy.module.scss';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wanmark Global',
  openGraph: {
    title: 'Privacy Policy | Wanmark Global',
  },
  robots: 'noindex',
};

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('policies.privacy');

  const res = await getPolicy({ id: '2', locale });
  const { elements } = parseJSONToElements(res.content.root.children);

  return (
    <main>
      <PolicyHero
        title={{
          value: t('title', { fallback: 'Privacy Policy' }),
          color: 'blackYellow',
        }}
        color="#FFE69E"
      />
      <PolicyLayout className={st.layout}>{elements}</PolicyLayout>
    </main>
  );
}
