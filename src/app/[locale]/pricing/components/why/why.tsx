'use client';

import { cn } from '@/shared/lib/styles';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { LinkButton } from '@/shared/ui/kit/link-button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why.module.scss';

export function Why() {
  const reasons = [
    {
      id: '01',
      title: 'Avoid costly mistakes',
      description: 'that can set your business back.',
    },
    {
      id: '02',
      title: 'Save time',
      description: 'by getting expert insights without trial and error.',
    },
    {
      id: '03',
      title: 'Maximize ROI',
      description: 'with strategies that generate long-term results.',
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={3} color="darkBlue" weight={500} className={st.title}>
          Why Consulting Saves You Money
        </Title>
        <ContactUs />
      </section>
      <section className={st.content}>
        {reasons.map(reason => (
          <div className={st.reason} key={reason.id}>
            <div className={st.left}>
              <Title
                level={4}
                color="darkBlue"
                weight={500}
                className={st.reasonTitle}
              >
                {reason.title}
              </Title>
              <Text color="darkBlue" className={st.reasonDescription}>
                {reason.description}
              </Text>
            </div>
            <div className={st.right}>
              <span>{reason.id}</span>/03
            </div>
          </div>
        ))}
      </section>
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
        <Text color="lightBlue" className={st.contactText}>
          Working with experienced consultants helps you:
        </Text>
      </div>
      <ContactUsButton />
    </div>
  );
}

function ContactUsButton() {
  //const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkButton
      variant="black"
      url="/growth-solutions"
      className={st.linkButton}
    >
      <span>Explore Growth Solutions</span>
      <ArrowTopRightCircle color="black" />
    </LinkButton>
  );
}
