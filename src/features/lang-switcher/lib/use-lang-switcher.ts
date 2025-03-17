import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

import type { LanguageConfig, UseLanguageSwitcherOptions } from './types';

const COOKIE_NAME = 'googtrans';

const getLanguageConfig = (): LanguageConfig | undefined => {
  let cfg: LanguageConfig | undefined;

  if (process.env.GOOGLE_TRANSLATION_CONFIG) {
    try {
      cfg = JSON.parse(process.env.GOOGLE_TRANSLATION_CONFIG ?? '{}');
    } catch (err) {
      console.error(err);
    }
  }

  return cfg;
};

export const useLanguageSwitcher = ({
  context,
}: UseLanguageSwitcherOptions = {}) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('');

  useEffect(() => {
    const cfg = getLanguageConfig();
    const cookies = parseCookies(context);
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue = '';
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split('/');
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (cfg && !languageValue) {
      languageValue = cfg.defaultLanguage;
    }
    setCurrentLanguage(languageValue);
  }, [context]);

  const switchLanguage = (lang: string) => {
    setCookie(context, COOKIE_NAME, '/auto/' + lang);
    window.location.reload();
  };

  return {
    currentLanguage,
    switchLanguage,
    languageConfig: getLanguageConfig(),
  };
};
