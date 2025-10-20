import React from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import st from './fourth-section.module.scss';

export function FourthSection({
  text,
  subtitle,
}: {
  text: string;
  subtitle: string;
}) {
  const t = useTranslations('marketCasesSlug');

  return (
    <section className={st.layout}>
      <div className={st.content}>
        <div className={st.text}>
          <Text color="lightBlue">
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </Text>
        </div>
        <div className={st.subtitle}>
          <h2>
            <span>{t('theResult', { fallback: 'The Result:' })} </span>
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
}
