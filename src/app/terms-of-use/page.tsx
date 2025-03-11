import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

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
