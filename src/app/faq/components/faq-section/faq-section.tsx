'use client';
import { Accordion } from '@/shared/ui/kit/accordion/accordion';
import { AccordionDef } from '@/shared/ui/kit/accordion/types';
import { Title } from '@/shared/ui/kit/title';

import st from './faq-section.module.scss';
import Image from 'next/image';

export function FaqSection({
  title,
  faq,
  image,
}: {
  title: string;
  faq: AccordionDef[];
  image: string;
}) {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={3} color="darkBlue" weight={500} className={st.title}>
          {title}
        </Title>
        <Image src={image} alt="faq" width={52} height={52} />
      </section>
      <Accordion content={faq} />
    </section>
  );
}
