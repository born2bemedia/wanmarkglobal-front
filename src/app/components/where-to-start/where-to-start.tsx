'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './where-to-start.module.scss';

export function WhereToStart() {
  return (
    <section className={st.layout}>
      <section>
        <Title level={4} color="darkBlue" weight={500}>
          Not Sure Where to Start?
        </Title>
        <Title level={4} color="darkBlue" weight={500}>
          Need a Complete Solution?
        </Title>
      </section>
      <section>
        <Image
          className={st.imgBanner}
          src="/where-to-start.webp"
          alt="where-to-start-banner"
          width={1200}
          height={400}
          layout="responsive"
        />
      </section>
      <section className={st.footer}>
        <Text color="lightBlue" className={st.textLayout}>
          Find the right path for your business. Choose a solution that best
          fits your idea and goals.
        </Text>
        <CheckSolutionBtn />
      </section>
    </section>
  );
}

function CheckSolutionBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/growth-solutions">
      <Button
        className={st.checkBtn}
        variant="black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Check Growth Solutions</span>
        <ArrowTopRight color={isHovered ? 'black' : 'white'} />
      </Button>
    </Link>
  );
}
