'use client';

import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';

import st from './account-layout.module.scss';

export function AccountLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('account.settings');

  return (
    <section className={st.layout}>
      {children}
      <div className={st.btnLayout}>
        <Button variant="secondary" className={st.btn}>
          {t('logOut', { fallback: 'Log Out' })}
        </Button>
      </div>
    </section>
  );
}
