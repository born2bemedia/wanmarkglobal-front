import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { ArrowTopRight } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import st from './hero.module.scss';

export function ContactUsButton({
  mobile = false,
  iconColor = 'blue',
  textColor = 'black',
}: {
  mobile?: boolean;
  iconColor?: 'blackPurple' | 'blue';
  textColor?: 'blackPurple' | 'black' | 'darkPurple';
}) {
  const t = useTranslations('contactUsBtn');

  return (
    <Link href="/contact">
      <Button
        className={cn(st.btn, {
          [st.mobileBtn]: mobile,
          [st.desktopBtn]: !mobile,
        })}
      >
        <Text weight={500} color={textColor}>
          {t('text', { fallback: 'Contact Us' })}
        </Text>
        <ArrowTopRight color={iconColor} />
      </Button>
    </Link>
  );
}
