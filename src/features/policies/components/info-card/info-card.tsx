'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';
import {
  Clever,
  Diamond,
  Eye,
  FiveDots,
  Lightning,
  Magnet,
} from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './info-card.module.scss';

const icons: Record<string, ReactNode> = {
  'Legal Entity': <FiveDots width="31" height="30" />,
  'Registered Address': <Magnet width="29" height="30" color="#AD9FFF" />,
  'Office Address': <Diamond width="30" height="30" color="#FFC1F9" />,
  'Registered Number': <Clever width="30" height="30" color="#FFDE7D" />,
  Email: <Eye width="30" height="30" color="#9ECA9B" />,
  Phone: <Lightning width="30" height="30" color="#FFA0A2" />,
  Website: <FiveDots width="31" height="30" />,
};

export function InfoCard({
  name,
  value,
  fullWidth = false,
}: {
  name: string;
  value: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <article className={cn(st.layout, { [st.fullWidth]: fullWidth })}>
      {icons[name]}
      <section className={st.text}>
        <Title level={6} weight={500} color="darkBlue">
          {name}
        </Title>
        <Text>{value}</Text>
      </section>
    </article>
  );
}
