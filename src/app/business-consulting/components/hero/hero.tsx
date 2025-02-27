'use client';

import Image from 'next/image';

import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/styles';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
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
          src="/metallic-sphere.png"
          alt="metallic-sphere"
          className={st.metallicSphere}
          width={483}
          height={483}
        />
      </motion.div>
      <div className={st.content}>
        <Title weight={500} color="mediumBlue" className={st.title} uppercase>
          Business Consulting
        </Title>
        <div className={st.contactUs}>
          <Title level={5} weight={500} color="lightBlue" uppercase>
            Start, Structure, and Grow Your Business
          </Title>
          <ContactUsButton />
        </div>
        <Separator />
        <Text color="lightBlue" className={st.textMargin} uppercase>
          Scroll to explore
        </Text>
        <ContactUsButton mobile />
      </div>
    </section>
  );
}

function ContactUsButton({ mobile = false }: { mobile?: boolean }) {
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
      <ArrowTopRightCircle />
    </Button>
  );
}
