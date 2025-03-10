'use client';

import { ReactNode } from 'react';

import { Button } from '@/shared/ui/kit/button';

import st from './account-layout.module.scss';

export function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <section className={st.layout}>
      {children}
      <div className={st.btnLayout}>
        <Button variant="grey" className={st.btn}>
          Log Out
        </Button>
      </div>
    </section>
  );
}
