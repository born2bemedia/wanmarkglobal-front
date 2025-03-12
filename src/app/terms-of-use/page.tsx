import type { Metadata } from 'next';

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
  const res = await getPolicy({ id: '1' });
  const { elements } = parseJSONToElements(res.content.root.children);

  return (
    <main>
      <PolicyHero
        title={{ value: 'Terms of Use', color: 'blackPurple' }}
        color="#D3CBFF"
      />
      <PolicyLayout>{elements}</PolicyLayout>
    </main>
  );
}
