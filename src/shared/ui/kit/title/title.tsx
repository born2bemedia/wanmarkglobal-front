'use client';

import { CSSProperties, JSX, ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './title.module.scss';
import { TitleColor, TitleLevel } from './types';

export function Title({
  children,
  className,
  style,
  color = 'mediumBlue',
  level = 1,
  weight = 700,
  uppercase = false,
}: {
  children: ReactNode;
  color?: TitleColor;
  level?: TitleLevel;
  weight?: 300 | 400 | 500 | 600 | 700;
  className?: string;
  style?: CSSProperties;
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
      [st.weightThin]: weight === 300,
      [st.lightBlueColor]: color === 'lightBlue',
      [st.mediumBlueColor]: color === 'mediumBlue',
      [st.blackColor]: color === 'black',
      [st.darkBlueColor]: color === 'darkBlue',
      [st.darkPurple]: color === 'darkPurple',
      [st.blackYellow]: color === 'blackYellow',
      [st.opacityBlackYellow]: color === 'opacityBlackYellow',
      [st.umberPeach]: color === 'umberPeach',
      [st.opacityUmberPeach]: color === 'opacityUmberPeach',
      [st.white]: color === 'white',
      [st.coralColor]: color === 'coral',
      [st.opacityCoralColor]: color === 'opacityCoral',
      [st.lightGreen]: color === 'lightGreen',
      [st.green]: color === 'green',
      [st.uppercase]: uppercase,
    },
    className,
  );

  return (
    <Tag className={titleClasses} style={style}>
      {children}
    </Tag>
  );
}
