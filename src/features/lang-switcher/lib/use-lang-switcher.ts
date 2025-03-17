import { useEffect, useState } from 'react';

import { cookies } from '@/shared/lib/browser';

import type { LanguageConfig } from './types';

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

export const useLanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('');

  useEffect(() => {
    const cfg = getLanguageConfig();
    const existingLanguageCookieValue = cookies.get(COOKIE_NAME);

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
  }, []);

  const switchLanguage = async (lang: string) => {
    await new Promise<void>(resolve => {
      cookies.set(COOKIE_NAME, `/auto/${lang}`, {
        path: '/',
        expires: 30,
        sameSite: 'lax',
      });
      setTimeout(resolve, 0);
    });

    window.location.reload();
  };

  return {
    currentLanguage,
    switchLanguage,
    languageConfig: getLanguageConfig(),
  };
};
