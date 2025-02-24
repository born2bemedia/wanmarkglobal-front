'use client';

import { cn } from '@/shared/lib/styles';

import st from './separator.module.scss';

export function Separator({ className }: { className?: string }) {
  return <div className={cn(st.separator, className)} />;
}
