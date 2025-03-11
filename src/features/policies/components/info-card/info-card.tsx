'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './info-card.module.scss';

export function InfoCard({ name, value }: { name: string; value: string }) {
  return (
    <article className={st.layout}>
      <Title level={6} weight={500} color="darkBlue">
        {name}
      </Title>
      <Text>{value}</Text>
    </article>
  );
}
