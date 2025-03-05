'use client';

import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './next-steps.module.scss';

const steps = [
  'Check your email for your invoice and payment details.',
  'Complete the bank transfer using the provided instructions.',
  'We will notify you once your payment is received and your services are initiated.',
];

export function NextSteps() {
  return (
    <section className={st.layout}>
      <section className={st.stepsLayout}>
        <Title level={5} weight={500} color="black" uppercase>
          What is next?
        </Title>
        <section className={st.cards}>
          {steps.map((step, i) => (
            <StepCard key={step} description={step} index={i} />
          ))}
        </section>
      </section>
      <Link href="/" className={st.btnWrapper}>
        <Button variant="black" className={st.btn}>
          Return to Homepage
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
