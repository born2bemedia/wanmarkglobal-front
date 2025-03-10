'use client';

import { type ReactNode } from 'react';

import st from './tab-layout.module.scss';

export function TabLayout({ children }: { children: ReactNode }) {
  return <section className={st.tabLayout}>{children}</section>;
}
