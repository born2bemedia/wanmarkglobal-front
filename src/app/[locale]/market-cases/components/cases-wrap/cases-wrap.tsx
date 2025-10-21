import { getCases } from '@/features/cases/actions';
import { CaseCard } from '@/features/cases/components/case-card';
import { casesLoopMapping } from '@/features/cases/lib/utils';

import st from './cases-wrap.module.scss';

export async function CasesWrap({ params }: { params: { locale: string } }) {
  const cases = await getCases({ params });
  const casesData = await casesLoopMapping(cases.reverse());

  return (
    <section className={st.casesWrap}>
      {casesData.map((item, index) => (
        <CaseCard key={index} {...item} />
      ))}
    </section>
  );
}
