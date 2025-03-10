'use client';

import { ReactNode } from 'react';

import st from './account-layout.module.scss';

export function AccountLayout({ children }: { children: ReactNode }) {
  return <section className={st.layout}>{children}</section>;
}
