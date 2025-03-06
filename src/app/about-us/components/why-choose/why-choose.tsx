import Image from 'next/image';

import { Layout } from '@/shared/ui/components/layout';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-choose.module.scss';

export function WhyChoose() {
  const reasons = [
    {
      title: 'You work with real experts',
      description:
        'Our team applies decades of combined experience to every project.',
      icon: '/about/why1.svg',
    },
    {
      title: 'You get structured, documented strategies',
      description:
        'No vague advice, just clear business roadmaps and execution plans.',
      icon: '/about/why2.svg',
    },
    {
      title: 'You avoid costly mistakes',
      description: 'We focus on data-driven decisions, not guesswork.',
      icon: '/about/why3.svg',
    },
  ];

  return (
    <Layout className={st.layout}>
      <div className={st.content}>
        <Title level={3} weight={500} uppercase>
          Why Choose Wanmark Global?
        </Title>
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
      </div>
    </Layout>
  );
}
