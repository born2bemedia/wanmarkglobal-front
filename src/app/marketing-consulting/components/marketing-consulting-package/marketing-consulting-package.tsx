'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './marketing-consulting-package.module.scss';

const steps = [
  {
    title: 'Select the marketing services you need from any category.',
    bgColor: '#FFC1F9',
    img: (
      <Image
        className={cn(st.stepImg, st.stepOneImg)}
        src="/metallic-vase.webp"
        alt="metallic"
        width={277}
        height={277}
      />
    ),
  },
  {
    title: 'Get a personalized plan tailored to your business goals.',
    bgColor: '#FFC3A0',
    img: (
      <Image
        className={cn(st.stepImg, st.stepTwoImg)}
        src="/metallic-worm.webp"
        alt="metallic"
        width={340}
        height={340}
      />
    ),
  },
  {
    title: 'Enjoy bulk pricing discounts when bundling multiple services.',
    bgColor: '#FFDE7D',
    img: (
      <Image
        className={cn(st.stepImg, st.stepThreeImg)}
        src="/metallic-star.webp"
        alt="metallic"
        width={323}
        height={323}
      />
    ),
  },
];

export function MarketingConsultingPackage() {
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
            Flexible Marketing
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
