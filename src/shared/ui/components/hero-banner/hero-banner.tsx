'use client';

import { ReactNode } from 'react';

import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/styles';
import { Button } from '@/shared/ui/kit/button';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { TitleColor } from '@/shared/ui/kit/title/types';

import st from './hero-banner.module.scss';

export function HeroBanner({
  image,
  color,
  title,
  contactText,
  scrollToExplore,
  contactUsIcon,
}: {
  image: ReactNode;
  color: string;
  title: { color: TitleColor; value: string; width?: string };
  contactText: { color: TitleColor; value: string; width?: string };
  scrollToExplore: { color: 'mediumBlue' | 'umber'; value: string; width?: string };
  contactUsIcon: ReactNode;
}) {
  return (
    <section className={st.layout} style={{ backgroundColor: color }}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {image}
      </motion.div>
      <div className={st.content}>
        <Title
          weight={500}
          color={title.color}
          className={st.title}
          style={{ width: title.width }}
          uppercase
        >
          {title.value}
        </Title>
        <div className={st.contactUs}>
          <Title
            level={5}
            weight={500}
            color={contactText.color}
            uppercase
            style={{ width: contactText.width, lineHeight: '1.3' }}
          >
            {contactText.value}
          </Title>
          <ContactUsButton>{contactUsIcon}</ContactUsButton>
        </div>
        <Separator />
        <Text color={scrollToExplore.color} className={st.textMargin} uppercase>
          {scrollToExplore.value ? scrollToExplore.value : 'Scroll to explore'}
        </Text>
        <ContactUsButton mobile>{contactUsIcon}</ContactUsButton>
      </div>
    </section>
  );
}

function ContactUsButton({
  mobile = false,
  children,
}: {
  mobile?: boolean;
  children: ReactNode;
}) {
  return (
    <Button
      variant="white"
      className={cn(
        {
          [st.desktopBtn]: !mobile,
          [st.mobileBtn]: mobile,
        },
        st.btnWithIcon,
      )}
    >
      Contact Us
      {children}
    </Button>
  );
}
