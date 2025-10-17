import React from 'react';

import { Text } from '@/shared/ui/kit/text';

import st from './second-section.module.scss';

export function SecondSection({
  text,
  subtitle,
}: {
  text: string;
  subtitle: string;
}) {
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
            <span>The Challenge: </span>
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  );
}
