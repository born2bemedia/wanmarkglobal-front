'use client';

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './tag.module.scss';

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn(st.layout, className)}>{children}</span>;
}
