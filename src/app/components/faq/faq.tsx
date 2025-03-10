'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import { ArrowTopRight } from '@/shared/ui/icons';
import { Accordion } from '@/shared/ui/kit/accordion/accordion';
import { AccordionDef } from '@/shared/ui/kit/accordion/types';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './faq.module.scss';

const faq: AccordionDef[] = [
  {
    title:
      'I do not know where to start. Do you work with customers of zero- or idea-level?',
    content: (
      <Text color="lightBlue" className={st.textWidth}>
        Yes! We guide you step-by-step from validation to launch. If your idea
        is not competitive in the market, we will be honest with you.
      </Text>
    ),
  },
  {
    title: 'Do I need a big budget for business and marketing consulting?',
    content: (
      <Text color="lightBlue" className={st.textWidth}>
        No. We tailor solutions based on your budget and goals. Besides, you can
        order individual services or complex packages.
      </Text>
    ),
  },
  {
    title: 'How long does it take to see results?',
    content: (
      <Text color="lightBlue" className={st.textWidth}>
        It varies. We can’t promise specific results within a fixed timeframe,
        but we ensure you avoid costly mistakes, wasted efforts, and ineffective
        strategies. With our guidance, you’ll take the right steps, maximizing
        efficiency and budget use.
      </Text>
    ),
  },
  {
    title: 'What if I’ve already started but things aren’t working?',
    content: (
      <Text color="lightBlue" className={st.textWidth}>
        We identify the problems, fix what’s missing, and help you move forward.
        Do not worry, just contact us!
      </Text>
    ),
  },
];

export function Faq() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={3} color="darkBlue" weight={500} className={st.title}>
          Got Questions? We Have Answers!
        </Title>
        <ContactUs />
      </section>
      <Accordion content={faq} />
      <ContactUs mobile />
    </section>
  );
}

function ContactUs({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={cn(st.contactLayout, {
        [st.contactDesktop]: !mobile,
        [st.contactMobile]: mobile,
      })}
    >
      <div className={st.contactText}>
        <Text color="lightBlue">Still have questions? Let’s talk.</Text>
      </div>
      <ContactUsButton />
    </div>
  );
}

function ContactUsButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/contact">
      <Button
        variant="black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Contact Us</span>
        <ArrowTopRight color={isHovered ? 'black' : 'white'} />
      </Button>
    </Link>
  );
}
