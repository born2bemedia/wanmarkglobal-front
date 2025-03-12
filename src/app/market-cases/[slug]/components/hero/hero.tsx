'use client';

import Image from 'next/image';

import { ContactUsBtn } from '@/shared/ui/components/contact-us-btn';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

const isVideo = (src: string) => /\.(webm|mp4)$/i.test(src);

export function Hero({
  title,
  subtitle,
  backgroundSrc,
}: {
  title: string;
  subtitle: string;
  backgroundSrc: string;
}) {
  return (
    <section className={st.layout}>
      {isVideo(backgroundSrc) ? (
        <video className={st.background} autoPlay loop muted playsInline>
          <source src={backgroundSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={backgroundSrc}
          alt="Background"
          width={1400}
          height={400}
          className={st.background}
        />
      )}
      <section className={st.content}>
        <section className={st.title}>
          <Title color="white" weight={500} uppercase>
            {title}
          </Title>
          <div className={st.contactUs}>
            <Title level={5} color="white" weight={500} uppercase>
              {subtitle}
            </Title>
            <span className={st.contactBtnDesktop}>
              <ContactUsBtn variant="white" />
            </span>
          </div>
        </section>
        <Separator className={st.separator} />
        <Text className={st.scrollText} uppercase>
          Scroll to explore
        </Text>
        <span className={st.contactBtnMobile}>
          <ContactUsBtn variant="white" />
        </span>
      </section>
    </section>
  );
}
