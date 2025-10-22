'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Switcher } from '@/features/lang-switcher/components/switcher';

import { English, Germany, Italy } from '@/shared/ui/icons/countries';

import st from './lang-switcher.module.scss';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = useCallback(
    (value: string) => {
      const pathWithoutLocale = pathname.replace(/^\/(en|de|it)/, '');
      const newPath = `/${value}${pathWithoutLocale}`;
      console.log('newPath', newPath);
      router.replace(newPath);
    },
    [pathname, router],
  );

  return (
    <Switcher
      options={[
        {
          label: (
            <span
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <English />
              EN
            </span>
          ),
          value: 'en',
        },
        {
          label: (
            <span
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Germany />
              DE
            </span>
          ),
          value: 'de',
        },
        {
          label: (
            <span
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Italy />
              IT
            </span>
          ),
          value: 'it',
        },
      ]}
      value={<span className={st.locale}>{locale}</span>}
      onChange={switchLanguage}
    />
  );
}
