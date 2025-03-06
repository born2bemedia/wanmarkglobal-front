'use client';

import { ReactNode, useMemo } from 'react';

import { cn } from '@/shared/lib/styles';
import { Slider } from '@/shared/ui/components/slider';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './flow-slider.module.scss';

export function FlowSlider({
  steps,
  titleWidth,
  notag,
}: {
  steps: {
    title: string;
    desc?: string;
    bgColor: string;
    img: ReactNode;
    index: number;
  }[];
  titleWidth?: number;
  notag?: boolean;
}) {
  return (
    <section className={st.slider}>
      <section className={st.mobileFlow}>
        {steps.map(({ title, img, bgColor, desc }, i) => (
          <StepCard
            key={title}
            title={title}
            desc={desc}
            index={i}
            img={img}
            bgColor={bgColor}
            notag={notag}
          />
        ))}
      </section>
      <section className={st.desktopFlow}>
        <Slider
          slides={steps.map(({ title, img, bgColor, desc }, i) => (
            <StepSlide
              key={title}
              title={title}
              desc={desc}
              index={i}
              img={img}
              bgColor={bgColor}
              totalSteps={steps.length}
              titleWidth={titleWidth}
              notag={notag}
            />
          ))}
        />
      </section>
    </section>
  );
}

function StepSlide({
  title,
  desc,
  img,
  bgColor,
  index,
  totalSteps,
  titleWidth,
  notag,
}: {
  title: string;
  desc?: string;
  bgColor: string;
  img: ReactNode;
  index: number;
  totalSteps: number;
  titleWidth?: number;
  notag?: boolean;
}) {
  const isEven = useMemo(() => index % 2 !== 0, [index]);

  return (
    <article className={cn(st.slideLayout, { [st.slideReversed]: isEven })}>
      <div className={st.slideInfo}>
        {!notag && <Tag className={st.slideTag}>Step {index + 1}</Tag>}
        <Title
          level={4}
          weight={500}
          className={cn(st.slideTitle, st.text, st.lineHeightText)}
          style={{ width: `${titleWidth}px` }}
        >
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
        {desc && (
          <Text color="mediumBlue" className={cn(st.text, st.lineHeightText)}>
            {desc}
          </Text>
        )}
      </div>
      <FlowLine step={index + 1} totalSteps={totalSteps} />
      <div className={st.slideImgLayout} style={{ backgroundColor: bgColor }}>
        {img}
      </div>
    </article>
  );
}

function StepCard({
  title,
  desc,
  img,
  bgColor,
  index,
  notag,
}: {
  title: string;
  desc?: string;
  bgColor: string;
  img: ReactNode;
  index: number;
  notag?: boolean;
}) {
  return (
    <article className={st.stepCardLayout}>
      <div>
        {!notag && <Tag>Step {index + 1}</Tag>}
        <Title
          level={4}
          weight={500}
          className={cn(st.cardTitle, st.lineHeightText)}
        >
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
        {desc && (
          <Text color="mediumBlue" className={st.lineHeightText}>
            {desc}
          </Text>
        )}
      </div>
      <div className={st.cardImgLayout} style={{ backgroundColor: bgColor }}>
        {img}
      </div>
    </article>
  );
}

function FlowLine({ step, totalSteps }: { step: number; totalSteps: number }) {
  const translateY = useMemo(() => {
    if (totalSteps === 1) return '-50%'; // Если 1 шаг, оставляем в центре

    const minY = -535; // Первая точка
    const maxY = 435; // Последняя точка

    if (step === 1) return `${minY}%`; // Первая точка фиксирована
    if (step === totalSteps) return `${maxY}%`; // Последняя точка фиксирована

    // Расчет позиции для промежуточных точек
    const stepPercentage =
      ((step - 1) / (totalSteps - 1)) * (maxY - minY) + minY;
    return `${stepPercentage}%`;
  }, [step, totalSteps]);

  return (
    <div className={st.flow}>
      <div className={st.flowLine} />
      <div
        className={st.flowDotLayout}
        style={{ transform: `translate(-50%, ${translateY})` }}
      >
        <div />
      </div>
    </div>
  );
}
