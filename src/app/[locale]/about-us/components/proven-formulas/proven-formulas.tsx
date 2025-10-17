import { Layout } from '@/shared/ui/components/layout';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { FormulaBlock } from '../formula-block';
import st from './proven-formulas.module.scss';


export function ProvenFormulas() {
  return (
    <Layout className={st.layout}>
      <div className={st.content}>
        <Title level={3} weight={500} uppercase>
          We Use Proven Formulas for Success
        </Title>
        <Text>
          Every successful business follows a structured approach. Our
          consulting is based on a <b>reliable, market-tested formula</b> that
          works across industries:
        </Text>
      </div>
      <FormulaBlock />
    </Layout>
  );
}
