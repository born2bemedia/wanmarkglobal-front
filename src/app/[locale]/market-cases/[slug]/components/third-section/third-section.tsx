import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import st from './third-section.module.scss';

export function ThirdSection({
  subtitle,
  strategies,
}: {
  subtitle: string;
  strategies: { icon: string; subtitle: string; text: string }[];
}) {
  const t = useTranslations('marketCasesSlug');

  return (
    <section className={st.layout}>
      <div className={st.content}>
        <div className={st.subtitle}>
          <h2>
            <span>{t('theStrategy', { fallback: 'The Strategy:' })} </span>
            {subtitle}
          </h2>
        </div>
        <div className={st.strategies}>
          {strategies.map(strategy => (
            <div className={st.strategy} key={strategy.subtitle}>
              <Image
                src={strategy.icon}
                alt={strategy.subtitle}
                width={60}
                height={60}
              />
              <h3>{strategy.subtitle}</h3>
              <Text>{strategy.text}</Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
