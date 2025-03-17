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
    const setCookie = () => {
      return new Promise<void>(resolve => {
        cookies.remove(COOKIE_NAME, { domain: window.location.hostname });
        cookies.set(COOKIE_NAME, `/auto/${lang}`, {
          path: '/',
          expires: 30,
          sameSite: 'lax',
          domain: `.${window.location.hostname}`,
        });
        resolve();
      });
    };

    try {
      await setCookie();
      window.location.reload();
    } catch (err) {
      console.error('Error setting new language:', err);
    }
  };

  return {
    currentLanguage,
    switchLanguage,
    languageConfig: getLanguageConfig(),
  };
};
