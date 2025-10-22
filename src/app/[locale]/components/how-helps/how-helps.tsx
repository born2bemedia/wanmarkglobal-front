'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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

const getHelp = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Business Consulting' }),
    buttonMeta: {
      value: t('cards.0.button', { fallback: 'Go to Business Consulting' }),
      link: '/business-consulting',
    },
    blocks: [
      {
        title: t('cards.0.blocks.0.title', {
          fallback: 'Validation & Planning',
        }),
        desc: t('cards.0.blocks.0.desc', {
          fallback: 'Test your idea, structure your business model.',
        }),
        icon: <FiveDots />,
      },
      {
        title: t('cards.0.blocks.1.title', {
          fallback: 'Setup & Organization',
        }),
        desc: t('cards.0.blocks.1.desc', {
          fallback: 'Register, budget, and optimize workflow.',
        }),
        icon: <Magnet />,
      },
      {
        title: t('cards.0.blocks.2.title', {
          fallback: 'First Clients & Growth',
        }),
        desc: t('cards.0.blocks.2.desc', {
          fallback: 'Launch, attract customers, and scale efficiently.',
        }),
        icon: <Mithosis />,
      },
    ],
  },
  {
    title: t('cards.1.title', { fallback: 'Marketing Consulting' }),
    buttonMeta: {
      value: t('cards.1.button', { fallback: 'Go to Marketing Consulting' }),
      link: '/marketing-consulting',
    },
    blocks: [
      {
        title: t('cards.1.blocks.0.title', {
          fallback: 'Brand & Market Positioning',
        }),
        desc: t('cards.1.blocks.0.desc', {
          fallback: 'Define your image and target audience.',
        }),
        icon: <Butterfly />,
      },
      {
        title: t('cards.1.blocks.1.title', {
          fallback: 'Traffic & Lead Generation',
        }),
        desc: t('cards.1.blocks.1.desc', {
          fallback: 'Optimize your website, social media, and ads.',
        }),
        icon: <Stairs />,
      },
      {
        title: t('cards.1.blocks.2.title', {
          fallback: 'Sales & Customer Retention',
        }),
        desc: t('cards.1.blocks.2.desc', {
          fallback: 'Convert leads, nurture clients, and increase profits.',
        }),
        icon: <Asterisk />,
      },
    ],
  },
];

export function HowHelps() {
  const t = useTranslations('home.howHelps');

  const help = getHelp(t);

  return (
    <section className={st.layout}>
      <div>
        <Title level={4} weight={500} className={st.title}>
          {t('title', { fallback: 'How' })}
        </Title>
        <Title level={4} weight={500} className={st.title}>
          {t('subtitle', { fallback: 'Wanmark Global helps' })}
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
