'use client';

import { Select } from '@/shared/ui/kit/select';

import { useLanguageSwitcher } from '../../lib';

export function LanguageSwitcher() {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher();

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
