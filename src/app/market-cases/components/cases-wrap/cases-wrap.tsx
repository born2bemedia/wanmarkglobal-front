import { getCases } from '@/features/cases/actions';
import { CaseCard } from '@/features/cases/components/case-card';
import { casesMapping } from '@/features/cases/lib/utils';

import st from './cases-wrap.module.scss';

export async function CasesWrap() {
  const cases = await getCases();
  const casesData = await casesMapping(cases.reverse());
  return (
    <section className={st.casesWrap}>
      {casesData.map((item, index) => (
        <CaseCard key={index} {...item} />
      ))}
    </section>
  );
}
