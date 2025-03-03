'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './text.module.scss';

export function Text({
  children,
  className,
  color = 'mediumBlue',
  weight = 400,
  uppercase = false,
  size = 'base',
}: {
  children: ReactNode;
  color?: 'mediumBlue' | 'darkBlue' | 'lightBlue' | 'black' | 'darkPurple' | 'umber' | 'white';
  className?: string;
  weight?: 200 | 300 | 400 | 500;
  size?: 'sm' | 'base' | 'lg' | 'heading';
  uppercase?: boolean;
}) {
  const textClasses = cn(
    {
      [st.lightBlueColor]: color === 'lightBlue',
      [st.mediumBlueColor]: color === 'mediumBlue',
      [st.blackColor]: color === 'black',
      [st.darkBlueColor]: color === 'darkBlue',
      [st.darkPurple]: color === 'darkPurple',
      [st.umber]: color === 'umber',
      [st.white]: color === 'white',
      [st.extraThinWeight]: weight === 200,
      [st.thinWeight]: weight === 300,
      [st.normalWeight]: weight === 400,
      [st.mediumWeight]: weight === 500,
      [st.smSize]: size === 'sm',
      [st.baseSize]: size === 'base',
      [st.lgSize]: size === 'lg',
      [st.headingSize]: size === 'heading',
      [st.uppercase]: uppercase,
    },
    className,
  );

  return <p className={textClasses}>{children}</p>;
}
