'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import cn from 'classnames';

import st from './cookie-consent.module.scss';
import { Link } from '@/i18n/navigation';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const t = useTranslations('cookieConsent');

  if (!isVisible) return null;

  return (
    <div
      className={cn(st.cookiePopup, {
        [st.visible]: isVisible,
      })}
    >
      <h2>{t('title', { fallback: 'Cookie settings' })}</h2>
      <p>
        {t('text', {
          fallback:
            "Cookies help us improve our website. By clicking 'Accept,' you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our",
        })}{' '}
        <Link href="/cookie-policy" className={st.link}>
          {t('link', { fallback: 'Cookie Policy' })}
        </Link>
        .
      </p>
      <div className={st.buttons}>
        <button onClick={handleAccept} className={st.decline}>
          {t('decline', { fallback: 'Decline' })}
        </button>
        <button onClick={handleAccept} className={st.accept}>
          {t('accept', { fallback: 'Accept' })}
        </button>
      </div>
    </div>
  );
};
