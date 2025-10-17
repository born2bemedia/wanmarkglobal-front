import Image from 'next/image';

import { Layout } from '@/shared/ui/components/layout';
import { ArrowDown, ArrowTopRightCircle } from '@/shared/ui/icons';
import { LinkButton } from '@/shared/ui/kit/link-button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './fixed-packages.module.scss';

export const FixedPackages = () => {
  const packages = [
    {
      title: 'Business Idea Validation',
      description:
        'Pre-defined service bundles for structured business growth. These provide clear deliverables and cost transparency.',
      img: '/pricing/package1.png',
      button: 'Business Consulting',
      link: '/business-consulting',
    },
    {
      title: 'Custom Consulting Solutions',
      description:
        'Fully tailored strategies where you select individual services based on your business goals.',
      img: '/pricing/package2.png',
      button: 'Marketing Consulting',
      link: '/marketing-consulting',
    },
  ];

  return (
    <Layout className={st.layout}>
      <section className={st.titleLayout}>
        <Title
          level={3}
          color="darkBlue"
          weight={500}
          className={st.title}
          uppercase
        >
          Fixed Packages vs. Custom Solutions
        </Title>
        <Text color="lightBlue" className={st.textWidth}>
          We offer two pricing models to fit different needs:
        </Text>
      </section>
      <section className={st.packagesLayout}>
        {packages.map((item, index) => (
          <div className={st.package} key={item.title}>
            <div className={st.packageHeader}>
              <Title
                level={5}
                color="black"
                weight={500}
                className={st.packageTitle}
                uppercase
              >
                {item.title}
              </Title>
              <ArrowDown />
              <Text color="black" className={st.packageDescription}>
                {item.description}
              </Text>
            </div>

            <div className={st.packageImage}>
              <Image src={item.img} alt={item.title} fill />
            </div>
            <div className={st.buttonWrap}>
              {index == 0 ? (
                <LinkButton url={item.link} variant="white">
                  {item.button}
                  <ArrowTopRightCircle color="blue" />
                </LinkButton>
              ) : (
                <LinkButton url={item.link} variant="black">
                  {item.button}
                  <ArrowTopRightCircle color="black" />
                </LinkButton>
              )}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};
