'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';

import st from './contact-us-btn.module.scss';

export function ContactUsBtn({
  variant = 'black',
}: {
  variant?: 'black' | 'white';
}) {
  const t = useTranslations('contactUsButton');

  return (
    <Link href="/contact" className={st.link}>
      <Button
        variant={variant === 'black' ? 'black' : 'white'}
        className={st.btn}
      >
        {t('label', { fallback: 'Contact Us' })}
        <ArrowTopRightCircle color={variant === 'black' ? 'black' : 'blue'} />
      </Button>
    </Link>
  );
}
