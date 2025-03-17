'use client';

import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

import { Select } from '@/shared/ui/kit/select';

const COOKIE_NAME = 'googtrans';

type LanguageDescriptor = {
  name: string;
  title: string;
};

declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState();

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split('/');
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => {
    console.log('@lang', lang);
    setCookie(null, COOKIE_NAME, '/auto/' + lang);
    window.location.reload();
  };

  return (
    <Select
      options={[
        { label: <span className="notranslate">EN</span>, value: 'en' },
        { label: <span className="notranslate">DE</span>, value: 'de' },
        { label: <span className="notranslate">IT</span>, value: 'it' },
      ]}
      value={currentLanguage.toUpperCase()}
      onChange={switchLanguage}
    />
  );
}
