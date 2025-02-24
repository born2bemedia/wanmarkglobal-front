'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './text.module.scss';

export function Text({
  children,
  className,
  color = 'mediumBlue',
  weight = 400,
}: {
  children: ReactNode;
  color?: 'mediumBlue' | 'darkBlue' | 'lightBlue' | 'black';
  className?: string;
  weight?: 300 | 400 | 500;
}) {
  const textClasses = cn(
    {
      [st.lightBlueColor]: color === 'lightBlue',
      [st.mediumBlueColor]: color === 'mediumBlue',
      [st.blackColor]: color === 'black',
      [st.darkBlueColor]: color === 'darkBlue',
      [st.thinWeight]: weight === 300,
      [st.normalWeight]: weight === 400,
      [st.mediumWeight]: weight === 500,
    },
    className,
  );

  return <p className={textClasses}>{children}</p>;
}
