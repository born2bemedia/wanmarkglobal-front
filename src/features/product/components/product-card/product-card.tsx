'use client';

import { ReactNode } from 'react';

import { type Product } from '@/features/product/lib';

import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './product-card.module.scss';

export function ProductCard({
  id,
  cost,
  desc,
  icon,
  title,
  color,
  onOrder,
}: Product & {
  onOrder?: (args: {
    id: string;
    title: string;
    icon: ReactNode;
    price: string;
    color: string;
  }) => void;
}) {
  return (
    <article className={st.layout}>
      <section className={st.title}>
        {icon}
        <div className={st.titleAndDesc}>
          <Title level={4} weight={500} color="darkBlue">
            {title}
          </Title>
          <Text>{desc}</Text>
        </div>
      </section>
      <section className={st.orderLayout}>
        <Title level={3} weight={500} style={{ color }} uppercase>
          €{cost}
        </Title>
        <Button
          variant="black"
          className={st.orderBtn}
          onClick={() => onOrder?.({ id, icon, title, price: cost, color })}
        >
          Order <ArrowTopRightCircle color="black" />
        </Button>
      </section>
    </article>
  );
}
