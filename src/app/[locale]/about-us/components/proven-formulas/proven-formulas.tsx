import { useTranslations } from 'next-intl';

import { Layout } from '@/shared/ui/components/layout';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { FormulaBlock } from '../formula-block';
import st from './proven-formulas.module.scss';

export function ProvenFormulas() {
  const t = useTranslations('aboutUs.provenFormulas');

  return (
    <Layout className={st.layout}>
      <div className={st.content}>
        <Title level={3} weight={500} uppercase>
          {t('title', { fallback: 'We Use Proven Formulas for Success' })}
        </Title>
        <Text>
          {t('text.0', {
            fallback:
              'Every successful business follows a structured approach. Our consulting is based on a',
          })}{' '}
          <b>{t('text.1', { fallback: 'reliable, market-tested formula' })}</b>{' '}
          {t('text.2', { fallback: 'that works across industries:' })}
        </Text>
      </div>
      <FormulaBlock />
    </Layout>
  );
}
