'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './tab-heading.module.scss';

export function TabHeading({ title, desc }: { title: string; desc: string }) {
  return (
    <div className={st.heading}>
      <Title level={3} weight={500} uppercase>
        {title}
      </Title>
      <Text color="lightBlue" className={st.text}>
        {desc}
      </Text>
    </div>
  );
}
