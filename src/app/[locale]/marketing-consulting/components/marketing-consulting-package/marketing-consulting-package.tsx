'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { FlowSlider } from '@/shared/ui/components/flow-slider';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './marketing-consulting-package.module.scss';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0', {
      fallback: 'Select the marketing services you need from any category.',
    }),
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
    title: t('cards.1', {
      fallback: 'Get a personalized plan tailored to your business goals.',
    }),
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
    title: t('cards.2', {
      fallback: 'Enjoy bulk pricing discounts when bundling multiple services.',
    }),
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
  const t = useTranslations('marketingConsulting.marketingConsultingPackage');

  const steps = getSteps(t);

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
            {t('title.0', { fallback: 'Flexible Marketing' })}
          </Title>
          <Title
            level={4}
            weight={500}
            color="darkBlue"
            className={st.title}
            uppercase
          >
            {t('title.1', { fallback: 'Consulting Package' })}
          </Title>
        </div>
        <div className={st.desc}>
          <Text color="lightBlue">
            {t('desc', {
              fallback:
                'Build your own package and get a custom price with a bulk order discount.',
            })}
          </Text>
        </div>
      </section>
      <Title level={5} weight={500} color="darkBlue" className={st.howItWorks}>
        {t('howItWorks', { fallback: 'How It Works' })}
      </Title>
      <FlowSlider
        titleWidth={440}
        steps={steps.map((item, index) => ({ ...item, index }))}
      />
      <section className={st.requestLayout}>
        <div className={st.priceLayout}>
          <Title level={3} weight={500} uppercase>
            {t('price', { fallback: 'Price:' })}
          </Title>
          <Text weight={200} size="heading" uppercase>
            {t('onDemand', { fallback: 'On Demand' })}
          </Text>
        </div>
        <Link href="#order-form">
          <Button variant="black">
            {t('request', { fallback: 'Request' })}{' '}
            <ArrowTopRightCircle color="black" />
          </Button>
        </Link>
      </section>
    </section>
  );
}
