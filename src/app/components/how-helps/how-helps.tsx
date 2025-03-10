'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import {
  ArrowTopRight,
  Asterisk,
  Butterfly,
  FiveDots,
  Magnet,
  Mithosis,
  Stairs,
} from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-helps.module.scss';

const help = [
  {
    title: 'Business Consulting',
    buttonMeta: {
      value: 'Go to Business Consulting',
      link: '/business-consulting',
    },
    blocks: [
      {
        title: 'Validation & Planning',
        desc: 'Test your idea, structure your business model.',
        icon: <FiveDots />,
      },
      {
        title: 'Setup & Organization',
        desc: 'Register, budget, and optimize workflow.',
        icon: <Magnet />,
      },
      {
        title: 'First Clients & Growth',
        desc: 'Launch, attract customers, and scale efficiently.',
        icon: <Mithosis />,
      },
    ],
  },
  {
    title: 'Marketing Consulting',
    buttonMeta: {
      value: 'Go to Marketing Consulting',
      link: '/marketing-consulting',
    },
    blocks: [
      {
        title: 'Brand & Market Positioning',
        desc: 'Define your image and target audience.',
        icon: <Butterfly />,
      },
      {
        title: 'Traffic & Lead Generation',
        desc: 'Optimize your website, social media, and ads.',
        icon: <Stairs />,
      },
      {
        title: 'Sales & Customer Retention',
        desc: 'Convert leads, nurture clients, and increase profits.',
        icon: <Asterisk />,
      },
    ],
  },
];

export function HowHelps() {
  return (
    <section className={st.layout}>
      <div>
        <Title level={4} weight={500} className={st.title}>
          How
        </Title>
        <Title level={4} weight={500} className={st.title}>
          Wanmark Global helps
        </Title>
      </div>
      <section className={st.helpLayout}>
        {help.map(item => (
          <HelpBlock key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
}

function HelpBlock({
  title,
  blocks,
  buttonMeta,
}: {
  title: string;
  blocks: { title: string; desc: string; icon: JSX.Element }[];
  buttonMeta: { value: string; link: string };
}) {
  return (
    <section>
      <div className={st.helpTitle}>
        <Title level={5} color="black" weight={500}>
          {title}
        </Title>
        <Link href={buttonMeta.link}>
          <HelpButton value={buttonMeta.value} />
        </Link>
      </div>
      <section className={st.helpBlocks}>
        {blocks.map(({ title, desc, icon }) => (
          <HelpCard key={title} title={title} desc={desc} icon={icon} />
        ))}
      </section>
      <Link href={buttonMeta.link}>
        <HelpButton value={buttonMeta.value} mobile />
      </Link>
    </section>
  );
}

function HelpButton({
  value,
  mobile = false,
}: {
  value: string;
  mobile?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="black"
      className={cn(
        {
          [st.helpBtnMobile]: mobile,
          [st.helpBtnDesktop]: !mobile,
        },
        st.helpBtn,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{value}</span>
      <ArrowTopRight color={isHovered ? 'black' : 'white'} />
    </Button>
  );
}

function HelpCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: JSX.Element;
}) {
  return (
    <section className={st.helpCard}>
      {icon}
      <Title level={6} weight={500} color="darkBlue" className={st.cardTitle}>
        {title}
      </Title>
      <Text weight={400} color="lightBlue">
        {desc}
      </Text>
    </section>
  );
}
