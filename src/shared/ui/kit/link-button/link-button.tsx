'use client';

import { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/shared/lib/styles';

import st from './link-button.module.scss';

export function LinkButton({
  children,
  className,
  variant = 'white',
  url,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'black' | 'white' | 'grey';
  url: string;
}) {
  const buttonClasses = cn(
    st.btn,
    {
      [st.btnBlack]: variant === 'black',
      [st.btnWhite]: variant === 'white',
      [st.btnGrey]: variant === 'grey',
    },
    className,
  );

  return (
    <Link href={url} className={buttonClasses} {...props}>
      {children}
    </Link>
  );
}
