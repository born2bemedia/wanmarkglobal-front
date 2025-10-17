'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Star } from '@/shared/ui/icons';

import st from './formula-block.module.scss';

export function FormulaBlock() {
  const t = useTranslations('aboutUs.formulaBlock');

  const formulaElements = [
    { content: '(', classes: st.white },
    {
      content: t('yourIdea', { fallback: 'Your Idea' }),
      classes: `${st.white} ${st.element}`,
    },
    { content: '×', classes: `${st.white} ${st.element}` },
    {
      content: t('wanmarkExpertise', { fallback: 'Wanmark Expertise' }),
      classes: `${st.blue} ${st.element}`,
    },
    { content: ')', classes: st.white },
    { content: '+', classes: `${st.white} ${st.element}` },
    {
      content: t('marketKnowledge', { fallback: 'Market Knowledge' }),
      classes: `${st.blue} ${st.element}`,
    },
    { content: '=', classes: `${st.white} ${st.element}` },
    {
      content: t('yourBusinessSuccess', { fallback: 'Your Business Success' }),
      classes: `${st.blue} ${st.element}`,
      extra: <Star color="#0B1635" width="22" height="22" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % formulaElements.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [formulaElements.length]);

  return (
    <div className={st.formulaBlock}>
      <span
        className={st.formulaBack}
        style={{ opacity: activeIndex === formulaElements.length - 1 ? 1 : 0 }}
      />
      {formulaElements.map((item, index) => {
        const isBracket = item.content === '(' || item.content === ')';
        return (
          <div
            key={index}
            className={`${item.classes} ${!isBracket && activeIndex === index ? st.active : ''}`}
          >
            {item.content}
            {item.extra || null}
          </div>
        );
      })}
    </div>
  );
}
