'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './next-steps.module.scss';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  t('steps.0', {
    fallback: 'Check your email for your invoice and payment details.',
  }),
  t('steps.1', {
    fallback: 'Complete the bank transfer using the provided instructions.',
  }),
  t('steps.2', {
    fallback:
      'We will notify you once your payment is received and your services are initiated.',
  }),
];

export function NextSteps() {
  const t = useTranslations('thankYou.nextSteps');

  const steps = getSteps(t);

  return (
    <section className={st.layout}>
      <section className={st.stepsLayout}>
        <Title level={5} weight={500} color="black" uppercase>
          {t('title', { fallback: 'What is next?' })}
        </Title>
        <section className={st.cards}>
          {steps.map((step, i) => (
            <StepCard key={step} description={step} index={i} />
          ))}
        </section>
      </section>
      <Link href="/" className={st.btnWrapper}>
        <Button variant="black" className={st.btn}>
          {t('return', { fallback: 'Return to Homepage' })}
          <ArrowTopRightCircle color="black" />
        </Button>
      </Link>
    </section>
  );
}

function StepCard({
  description,
  index,
}: {
  description: string;
  index: number;
}) {
  const cardClasses = cn(st.stepCard, {
    [st.firstStep]: index === 0,
    [st.secondStep]: index === 1,
    [st.thirdStep]: index === 2,
  });

  return (
    <article className={cardClasses}>
      <div className={st.cardNumber}>{index + 1}</div>
      <Text weight={500} color="lightBlue">
        {description}
      </Text>
    </article>
  );
}
