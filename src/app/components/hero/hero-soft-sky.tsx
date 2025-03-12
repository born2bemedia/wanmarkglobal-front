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

export function HeroSoftSky() {
  return (
    <section className={cn(st.layout, st.blueBg)}>
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/metallic-white.svg"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={546}
          height={546}
        />
      </motion.div>
      <section className={st.content}>
        <div className={st.titleLayout}>
          <Title weight={500} className={st.title}>
            Turn Challenges into Growth.
          </Title>
          <Title level={5} weight={400}>
            Get Expert Guidance for Your Business & Brand.
          </Title>
        </div>
        <div className={st.contactUs}>
          <Text weight={300} className={st.text}>
            Struggling with strategy, marketing, or scaling? We help
            entrepreneurs, professionals, and small business owners build, grow,
            and optimize their projects with proven solutions.
          </Text>
          <ContactUsButton />
        </div>
        <Separator />
        <section className={st.heroFooter}>
          <Text>Turn Challenges into Growth</Text>
          <div className={st.nextBlock}>
            <Text>
              01/<span className={st.opacityText}>03</span>
            </Text>
            <Text>NEXT</Text>
          </div>
          <Text className={st.scrollText}>Scroll to explore</Text>
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
      <ArrowTopRight />
    </Button>
  );
}
