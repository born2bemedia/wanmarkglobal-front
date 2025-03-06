import Image from 'next/image';

import { Layout } from '@/shared/ui/components/layout';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { LinkButton } from '@/shared/ui/kit/link-button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './what-determines.module.scss';

export function WhatDetermines() {
  const reasons = [
    {
      title: 'Scope of Services',
      description: 'The number and complexity of services required.',
      icon: '/pricing/icon1.svg',
    },
    {
      title: 'Customization Level',
      description: 'Each strategy is tailored to your specific goals.',
      icon: '/pricing/icon2.svg',
    },
    {
      title: 'Expert Involvement',
      description:
        'You work with a dedicated manager and top-tier specialists.',
      icon: '/pricing/icon3.svg',
    },
    {
      title: 'Long-Term Impact',
      description:
        'Our strategies are designed for sustainable business growth, not quick fixes.',
      icon: '/pricing/icon4.svg',
    },
  ];

  return (
    <Layout className={st.layout}>
      <div className={st.content}>
        <div className={st.title}>
          <div>
            <Title level={3} weight={500} uppercase color="darkBlue">
              What Determines the Price
            </Title>
            <Text color="lightBlue">
              Every consulting project is unique, and pricing depends on several
              key factors:
            </Text>
          </div>
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
          className={st.linkButton}
        >
          Learn How We Work
          <ArrowTopRightCircle color="black" />
        </LinkButton>
      </div>
    </Layout>
  );
}
