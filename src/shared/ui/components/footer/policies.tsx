'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.scss';

const getPolicies = (t: ReturnType<typeof useTranslations>) => [
  { label: t('termsOfUse', { fallback: 'Terms of Use' }), href: '#' },
  { label: t('privacyPolicy', { fallback: 'Privacy Policy' }), href: '#' },
  { label: t('cookiePolicy', { fallback: 'Cookie Policy' }), href: '#' },
  { label: t('refundPolicy', { fallback: 'Refund Policy' }), href: '#' },
];

export function Policies() {
  const t = useTranslations('footer');
  const policies = getPolicies(t);

  return (
    <ol className={st.policiesLayout}>
      {policies.map(({ label, href }) => (
        <li key={label}>
          <Link href={href}>
            <Text color="black">{label}</Text>
          </Link>
        </li>
      ))}
    </ol>
  );
}
