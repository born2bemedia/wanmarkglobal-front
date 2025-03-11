'use client';

import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './button.module.scss';

export function Button({
  children,
  className,
  variant = 'white',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'black' | 'white' | 'grey' | 'secondary' | 'transparent';
}) {
  const buttonClasses = cn(
    st.btn,
    {
      [st.btnBlack]: variant === 'black',
      [st.btnWhite]: variant === 'white',
      [st.btnGrey]: variant === 'grey',
      [st.btnSecondary]: variant === 'secondary',
      [st.btnTransparent]: variant === 'transparent',
    },
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
