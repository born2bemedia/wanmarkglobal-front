'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/styles';
import { ArrowTopRight, ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/metallic-bomb.svg"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={512}
          height={512}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title weight={500} color="darkPurple" className={st.title}>
            Marketing Consulting
          </Title>
        </div>
        <div className={st.contactUs}>
          <Title level={5} weight={500} color="darkPurple" uppercase>
            Get Noticed, Get Clients, Get Results
          </Title>
          <ContactUsButton />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text color="darkPurple" uppercase>
            Scroll to explore
          </Text>
        </section>
        <ContactUsButton mobile />
      </section>
    </section>
  );
}

function ContactUsButton({ mobile = false }: { mobile?: boolean }) {
  return (
    <Button
      className={cn(st.btn, {
        [st.mobileBtn]: mobile,
        [st.desktopBtn]: !mobile,
      })}
    >
      Contact Us
      <ArrowTopRightCircle color="darkPurple" />
    </Button>
  );
}
