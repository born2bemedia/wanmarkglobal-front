'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';
import { ArrowDown, ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './package-card.module.scss';

export function PackageCard({
  description,
  onOrder,
  price,
  title,
  color,
  services,
}: {
  title: string;
  description: string;
  price: string;
  onOrder?: () => void;
  services: { icon: ReactNode; title: string }[];
  color: 'surfaceYellow' | 'grey';
}) {
  const layoutClasses = cn(st.layout, {
    [st.surfaceYellowColor]: color === 'surfaceYellow',
    [st.greyColor]: color === 'grey',
  });

  return (
    <article className={layoutClasses}>
      <section className={st.titleLayout}>
        <Title
          level={4}
          weight={500}
          color={color === 'surfaceYellow' ? 'blackYellow' : 'mediumBlue'}
        >
          {title}
        </Title>
        <ArrowDown />
      </section>
      <section className={st.contentLayout}>
        <Title level={5} weight={500} className={st.title}>
          {description}
        </Title>
        <Text color="lightBlue" weight={500} size="lg" className={st.includes}>
          Includes:
        </Text>
        <section className={st.serviceLayout}>
          {services.map(({ icon, title }) => (
            <section key={title} className={st.serviceCard}>
              {icon}
              <Text color="black" weight={500}>
                {title}
              </Text>
            </section>
          ))}
        </section>
        <section className={st.orderLayout}>
          <Title level={4} color="mediumBlue" weight={300}>
            Price: <span className={st.price}>€{price}</span>
          </Title>
          <Button variant="black" className={st.orderBtn} onClick={onOrder}>
            Order Now
            <ArrowTopRightCircle color="black" />
          </Button>
        </section>
      </section>
    </article>
  );
}
