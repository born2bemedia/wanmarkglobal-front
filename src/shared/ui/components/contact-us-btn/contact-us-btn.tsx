'use client';

import Link from 'next/link';

import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';

import st from './contact-us-btn.module.scss';

export function ContactUsBtn({
  variant = 'black',
}: {
  variant?: 'black' | 'white';
}) {
  return (
    <Link href="/contact" className={st.link}>
      <Button
        variant={variant === 'black' ? 'black' : 'white'}
        className={st.btn}
      >
        Contact Us
        <ArrowTopRightCircle color={variant === 'black' ? 'black' : 'blue'} />
      </Button>
    </Link>
  );
}
