'use client';

import { Switcher } from '@/features/lang-switcher/components/switcher';

import { English, Germany, Italy } from '@/shared/ui/icons/countries';

export function LanguageSwitcher() {
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
      value={<span className="notranslate">EN</span>}
      onChange={() => {}}
    />
  );
}
