import { PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

import { Hero } from './components/hero';

export default async function TermsOfUse() {
  const res = await getPolicy({ id: '1' });
  const elements = parseJSONToElements(res.content.root.children);

  return (
    <main>
      <Hero />
      <PolicyLayout>{elements}</PolicyLayout>
    </main>
  );
}
