'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './text.module.scss';
import type { TextColor } from './types';

export function Text({
  children,
  className,
  color = 'mediumBlue',
  weight = 400,
  uppercase = false,
  capitalize = false,
  size = 'base',
}: {
  children: ReactNode;
  color?: TextColor;
  className?: string;
  weight?: 200 | 300 | 400 | 500;
  size?: 'sm' | 'base' | 'lg' | 'xl' | 'heading';
  uppercase?: boolean;
  capitalize?: boolean;
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
      [st.darkGrayColor]: color === 'darkGrey',
      [st.deepBlack]: color === 'deepBlack',
      [st.coralColor]: color === 'coral',
      [st.lightGreen]: color === 'lightGreen',
      [st.green]: color === 'green',
      [st.xlSize]: size === 'xl',
      [st.capitalize]: capitalize,
    },
    className,
  );

  return <p className={textClasses}>{children}</p>;
}
