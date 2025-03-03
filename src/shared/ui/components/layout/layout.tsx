'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './layout.module.scss';

export function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn(st.layout, className)}>{children}</section>;
}
