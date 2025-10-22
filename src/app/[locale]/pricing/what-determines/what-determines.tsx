import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Layout } from '@/shared/ui/components/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { LinkButton } from '@/shared/ui/kit/link-button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './what-determines.module.scss';

export function WhatDetermines() {
  const t = useTranslations('pricing.whatDetermines');

  const reasons = [
    {
      title: t('reasons.0.title', { fallback: 'Scope of Services' }),
      description: t('reasons.0.desc', {
        fallback: 'The number and complexity of services required.',
      }),
      icon: '/pricing/icon1.svg',
    },
    {
      title: t('reasons.1.title', { fallback: 'Customization Level' }),
      description: t('reasons.1.desc', {
        fallback: 'Each strategy is tailored to your specific goals.',
      }),
      icon: '/pricing/icon2.svg',
    },
    {
      title: t('reasons.2.title', { fallback: 'Expert Involvement' }),
      description: t('reasons.2.desc', {
        fallback: 'You work with a dedicated manager and top-tier specialists.',
      }),
      icon: '/pricing/icon3.svg',
    },
    {
      title: t('reasons.3.title', { fallback: 'Long-Term Impact' }),
      description: t('reasons.3.desc', {
        fallback:
          'Our strategies are designed for sustainable business growth, not quick fixes.',
      }),
      icon: '/pricing/icon4.svg',
    },
  ];

  return (
    <Layout className={st.layout}>
      <div className={st.content}>
        <div className={st.title}>
          <div>
            <Title level={3} weight={500} uppercase color="darkBlue">
              {t('title', { fallback: 'What Determines the Price' })}
            </Title>
            <Text color="lightBlue">
              {t('text', {
                fallback:
                  'Every consulting project is unique, and pricing depends on several key factors:',
              })}
            </Text>
          </div>
          <LinkButton
            url="/how-we-work"
            variant="black"
            className={cn(st.linkButton, st.linkBtnDesktop)}
          >
            {t('learn', { fallback: 'Learn How We Work' })}
            <ArrowTopRightCircle color="black" />
          </LinkButton>
        </div>
        <div className={st.reasons}>
          {reasons.map(reason => (
            <div className={st.reason} key={reason.title}>
              <Image
                src={reason.icon}
                alt={reason.title}
                width={60}
                height={60}
              />
              <div>
                <Title level={4} weight={500} color="darkBlue">
                  {reason.title}
                </Title>
                <Text color="darkBlue">{reason.description}</Text>
              </div>
            </div>
          ))}
        </div>
        <LinkButton
          url="/how-we-work"
          variant="black"
          className={cn(st.linkButton, st.linkBtnMobile)}
        >
          {t('learn', { fallback: 'Learn How We Work' })}
          <ArrowTopRightCircle color="black" />
        </LinkButton>
      </div>
    </Layout>
  );
}
