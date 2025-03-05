'use client';

import Link from 'next/link';

import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';

import st from './contact-us-btn.module.scss';

export function ContactUsBtn() {
  return (
    <Link href="/contact" className={st.link}>
      <Button variant="black" className={st.btn}>
        Contact Us
        <ArrowTopRightCircle color="black" />
      </Button>
    </Link>
  );
}
