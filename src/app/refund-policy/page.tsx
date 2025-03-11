import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

import st from './refund-policy.module.scss';

export default async function RefundPolicy() {
  const res = await getPolicy({ id: '4' });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );

  return (
    <main>
      <PolicyHero
        title={{ value: 'Refund Policy', color: 'green' }}
        hint={{ value: lastUpdate ?? '', color: 'green' }}
        color="#C1EFBE"
      />
      <PolicyLayout className={st.layout}>{elements}</PolicyLayout>
    </main>
  );
}
