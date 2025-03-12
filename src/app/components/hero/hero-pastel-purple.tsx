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

export function HeroPastelPurple() {
  return (
    <section className={cn(st.layout, st.purpleBg)}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/home/purple-metallic-two.svg"
          alt="metallic-sphere"
          className={st.purpleMetallicTwo}
          width={683}
          height={683}
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
          src="/home/purple-metallic-one.svg"
          alt="metallic-sphere"
          className={st.purpleMetallicOne}
          width={446}
          height={440}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title weight={500} color="blackPurple" className={st.title}>
            100 million new businesses are launched globally each year.
          </Title>
          <Title level={5} color="blackPurple" weight={400}>
            90% of startups fail, with 70% not surviving between their second
            and fifth years.
          </Title>
        </div>
        <div className={st.contactUs}>
          <Text weight={300} color="blackPurple" className={st.text}>
            14% of startups fail due to poor marketing strategies.
          </Text>
          <ContactUsButton />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text color="blackPurple">Turn Challenges</Text>
          <div className={st.nextBlock}>
            <Text color="blackPurple">
              02/<span className={st.opacityText}>03</span>
            </Text>
            <Text color="blackPurple">NEXT</Text>
          </div>
          <Text className={st.scrollText} color="blackPurple">
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
      <Text weight={500} color="blackPurple">
        Contact Us
      </Text>
      <ArrowTopRight color="blackPurple" />
    </Button>
  );
}
