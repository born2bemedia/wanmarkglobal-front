import { PolicyHero, PolicyLayout } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services';

import { parseJSONToElements } from '@/shared/lib/payload';

import st from './cookie-policy.module.scss';

export default async function PrivacyPolicy() {
  const res = await getPolicy({ id: '3' });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );

  return (
    <main>
      <PolicyHero
        title={{ value: 'Cookie Policy', color: 'darkPurple' }}
        hint={{ value: lastUpdate ?? '', color: 'darkPurple' }}
        color="#FFD2FB"
      />
      <PolicyLayout className={st.layout}>{elements}</PolicyLayout>
    </main>
  );
}
