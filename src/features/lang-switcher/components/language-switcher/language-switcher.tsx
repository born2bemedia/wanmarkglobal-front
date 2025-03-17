'use client';

import { NextPageContext } from 'next';

import { useLanguageSwitcher } from '@/features/lang-switcher/lib';

import { Select } from '@/shared/ui/kit/select';

export type LanguageSwitcherProps = {
  context?: NextPageContext;
};

export function LanguageSwitcher({ context }: LanguageSwitcherProps = {}) {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher({ context });

  if (!languageConfig) {
    return null;
  }

  return (
    <Select
      options={[
        { label: <span className="notranslate">EN</span>, value: 'en' },
        { label: <span className="notranslate">DE</span>, value: 'de' },
        { label: <span className="notranslate">IT</span>, value: 'it' },
      ]}
      value={
        <span className="notranslate">{currentLanguage.toUpperCase()}</span>
      }
      onChange={switchLanguage}
    />
  );
}
