'use client';

import { ReactNode } from 'react';

import st from './policy-layout.module.scss';

export function PolicyLayout({ children }: { children: ReactNode }) {
  return <section className={st.layout}>{children}</section>;
}
