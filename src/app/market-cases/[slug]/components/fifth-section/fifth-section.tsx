import React from 'react';

import { Text } from '@/shared/ui/kit/text';

import st from './fifth-section.module.scss';

export function FifthSection({
  text,
  subtitle,
}: {
  text: string;
  subtitle: string;
}) {
  return (
    <section className={st.layout}>
      <div className={st.content}>
        <div className={st.subtitle}>
          <h2>{subtitle}</h2>
        </div>
        <div className={st.text}>
          <Text color="lightBlue">
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </Text>
        </div>
      </div>
    </section>
  );
}
