'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/styles';
import { ArrowTopRight } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function HeroPink() {
  return (
    <section className={cn(st.layout, st.pinkBg)}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/home/pink-metallic-two.svg"
          alt="metallic-sphere"
          className={st.pinkMetallicTwo}
          width={581}
          height={581}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/home/pink-metallic-one.svg"
          alt="metallic-sphere"
          className={st.pinkMetallicOne}
          width={483}
          height={483}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title
            weight={500}
            color="darkPurple"
            className={cn(st.title, st.mb0)}
          >
            Idea is Half the Success.
          </Title>
        </div>
        <div className={st.contactUs}>
          <Text weight={300} color="darkPurple" className={st.text}>
            To thrive, you need proven business and marketing execution. Every
            idea entering the market faces competition and standard market laws.
          </Text>
          <ContactUsButton />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text color="darkPurple">Turn Challenges</Text>
          <div className={st.nextBlock}>
            <Text color="darkPurple">
              03/<span className={st.opacityText}>03</span>
            </Text>
            <Text color="darkPurple">NEXT</Text>
          </div>
          <Text className={st.scrollText} color="darkPurple">
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
      <Text weight={500} color="darkPurple">
        Contact Us
      </Text>
      <ArrowTopRight color="blackPurple" />
    </Button>
  );
}
