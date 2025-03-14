'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './business-consulting-package.module.scss';

const steps = [
  {
    title: 'Select the services you need from any segment.',
    bgColor: '#FFC1F9',
    img: (
      <Image
        className={cn(st.stepImg, st.stepOneImg)}
        src="/metallic-urchin.webp"
        alt="metallic"
        width={375}
        height={375}
      />
    ),
  },
  {
    title: 'Get a personalized plan tailored to your business goals.',
    bgColor: '#FFC3A0',
    img: (
      <Image
        className={cn(st.stepImg, st.stepTwoImg)}
        src="/metallic-thorn.webp"
        alt="metallic"
        width={351}
        height={351}
      />
    ),
  },
  {
    title: 'Enjoy a lower price per service when bundling multiple options.',
    bgColor: '#FFDE7D',
    img: (
      <Image
        className={cn(st.stepImg, st.stepThreeImg)}
        src="/metallic-dentures.webp"
        alt="metallic"
        width={333}
        height={333}
      />
    ),
  },
];

export function BusinessConsultingPackage() {
  return (
    <section className={st.layout}>
      <section className={st.header}>
        <div>
          <Title
            level={4}
            weight={500}
            color="darkBlue"
            className={st.title}
            uppercase
          >
            Flexible Business
          </Title>
          <Title
            level={4}
            weight={500}
            color="darkBlue"
            className={st.title}
            uppercase
          >
            Consulting Package
          </Title>
        </div>
        <div className={st.desc}>
          <Title level={6} color="darkBlue" weight={500}>
            Need multiple services across different categories?
          </Title>
          <Text color="lightBlue">
            Build your own package and get a custom price with a bulk order
            discount.
          </Text>
        </div>
      </section>
      <Title level={5} weight={500} color="darkBlue" className={st.howItWorks}>
        How It Works
      </Title>
      <FlowSlider
        titleWidth={440}
        steps={steps.map((item, index) => ({ ...item, index }))}
      />
      <section className={st.requestLayout}>
        <div className={st.priceLayout}>
          <Title level={3} weight={500} uppercase>
            Price:
          </Title>
          <Text weight={200} size="heading" uppercase>
            On Demand
          </Text>
        </div>
        <Link href="#order-form">
          <Button variant="black">
            Request <ArrowTopRightCircle color="black" />
          </Button>
        </Link>
      </section>
    </section>
  );
}
