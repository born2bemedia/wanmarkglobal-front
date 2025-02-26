'use client';

import { JSX, ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './title.module.scss';

export function Title({
  children,
  className,
  color = 'mediumBlue',
  level = 1,
  weight = 700,
  uppercase = false,
}: {
  children: ReactNode;
  color?: 'mediumBlue' | 'darkBlue' | 'lightBlue' | 'black';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 400 | 500 | 600 | 700;
  className?: string;
  uppercase?: boolean;
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const titleClasses = cn(
    {
      [st.oneSize]: level === 1,
      [st.twoSize]: level === 2,
      [st.threeSize]: level === 3,
      [st.fourSize]: level === 4,
      [st.fiveSize]: level === 5,
      [st.sixSize]: level === 6,
      [st.weightBold]: weight === 700,
      [st.weightSemibold]: weight === 600,
      [st.weightMedium]: weight === 500,
      [st.weightRegular]: weight === 400,
      [st.lightBlueColor]: color === 'lightBlue',
      [st.mediumBlueColor]: color === 'mediumBlue',
      [st.blackColor]: color === 'black',
      [st.darkBlueColor]: color === 'darkBlue',
      [st.uppercase]: uppercase,
    },
    className,
  );

  return <Tag className={titleClasses}>{children}</Tag>;
}
