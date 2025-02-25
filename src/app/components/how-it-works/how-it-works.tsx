'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/styles';
import { Slider } from '@/shared/ui/components/slider/slider';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-it-works.module.scss';

const steps = [
  {
    title: 'Tell Us About Your Idea',
    desc: 'Share your goals, challenges, and vision.',
    bgColor: '#C1D5FF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepOneImg)}
        src="/step-one.svg"
        alt="metallic"
        width={360}
        height={356}
      />
    ),
  },
  {
    title: 'Get a Tailored Plan',
    desc: 'We analyze your needs and create a strategy.',
    bgColor: '#D3CBFF',
    img: (
      <Image
        className={cn(st.stepImg, st.stepTwoImg)}
        src="/step-two.svg"
        alt="metallic"
        width={351}
        height={351}
      />
    ),
  },
  {
    title: 'Implementation & Execution',
    desc: 'We guide you through the individual strategy.',
    bgColor: '#ffd3fa',
    img: (
      <Image
        className={cn(st.stepImg, st.stepThreeImg)}
        src="/step-three.svg"
        alt="metallic"
        width={508}
        height={508}
      />
    ),
  },
  {
    title: 'Optimize & Scale',
    desc: 'Improve results, automate processes, and expand your reach.',
    bgColor: '#ffd3d3',
    img: (
      <Image
        className={cn(st.stepImg, st.stepFourImg)}
        src="/step-four.svg"
        alt="metallic"
        width={360}
        height={360}
      />
    ),
  },
];

export function HowItWorks() {
  return (
    <section className={st.layout}>
      <section>
        <Title level={4} weight={500}>
          How It Works?
        </Title>
        <Title level={4} weight={500}>
          Simple & Effective
        </Title>
      </section>
      <section className={st.slider}>
        <Slider
          slides={steps.map(({ title, img, bgColor, desc }, i) => (
            <StepSlide
              key={title}
              title={title}
              desc={desc}
              index={i}
              img={img}
              bgColor={bgColor}
            />
          ))}
        />
      </section>
      <section className={st.mobileSteps}>
        {steps.map(({ title, img, bgColor, desc }, i) => (
          <StepCard
            key={title}
            title={title}
            desc={desc}
            index={i}
            img={img}
            bgColor={bgColor}
          />
        ))}
      </section>
    </section>
  );
}

export function StepSlide({
  title,
  desc,
  img,
  bgColor,
  index,
}: {
  title: string;
  desc: string;
  bgColor: string;
  img: ReactNode;
  index: number;
}) {
  return (
    <article className={st.slideLayout}>
      <div className={st.slideInfo}>
        <Tag className={st.slideTag}>Step {index + 1}</Tag>
        <Title level={4} weight={500} className={st.slideTitle}>
          {title}
        </Title>
        <Text color="mediumBlue">{desc}</Text>
      </div>
      <FlowLine />
      <div className={st.slideImgLayout} style={{ backgroundColor: bgColor }}>
        {img}
      </div>
    </article>
  );
}

export function StepCard({
  title,
  desc,
  img,
  bgColor,
  index,
}: {
  title: string;
  desc: string;
  bgColor: string;
  img: ReactNode;
  index: number;
}) {
  return (
    <article className={st.stepCardLayout}>
      <div>
        <Tag>Step {index + 1}</Tag>
        <Title level={4} weight={500} className={st.cardTitle}>
          {title}
        </Title>
        <Text color="mediumBlue">{desc}</Text>
      </div>
      <div className={st.cardImgLayout} style={{ backgroundColor: bgColor }}>
        {img}
      </div>
    </article>
  );
}

export function FlowLine() {
  return (
    <div className={st.flow}>
      <div className={st.flowLine} />
      <div className={st.flowDotLayout}>
        <div />
      </div>
    </div>
  );
}
