'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.scss';

const policies = [
  { label: 'Terms of Use', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Refund Policy', href: '#' },
];

export function Policies() {
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
