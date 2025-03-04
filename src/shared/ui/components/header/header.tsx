'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { BurgerMenu } from '@/features/burger-menu/components';

import { cn } from '@/shared/lib/styles';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Bag, Enter } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

export function Header() {
  const router = useRouter();

  return (
    <header className={st.header}>
      <section className={st.logoAndLinks}>
        <Link href="/">
          <Image src="/full-logo.svg" alt="Wanmark" width={130} height={25} />
        </Link>
        <section className={cn(st.toolbar, st.networks)}>
          <span className={st.select}>
            <Select
              options={[
                { label: 'ENG', value: 'ENG' },
                { label: 'DEU', value: 'DEU' },
                { label: 'ITA', value: 'ITA' },
              ]}
              value="ENG"
            />
          </span>
          <SocialNetworks />
        </section>
      </section>
      <nav className={cn(st.toolbar, st.nav)}>
        <Select
          options={[
            {
              value: '/business-consulting',
              label: 'Business Consulting',
            },
            {
              value: '/marketing-consulting',
              label: 'Marketing Consulting',
            },
            {
              value: '/growth-solutions',
              label: 'Growth Solutions',
            },
          ]}
          value="Services"
          textWeight={400}
          onChange={value => router.push(value)}
        />
        <Link href="/market-cases">
          <Text>Market Cases</Text>
        </Link>
        <Select
          options={[
            {
              value: '/about-us',
              label: 'About Us',
            },
            {
              value: '/faq',
              label: 'FAQ',
            },
            {
              value: '/how-we-work',
              label: 'How We Work',
            },
          ]}
          value="Company"
          textWeight={400}
          onChange={value => router.push(value)}
        />
        <Text>Pricing</Text>
        <div className={st.navBtns}>
          <Button variant="grey">
            Cart
            <Bag />
          </Button>
          <Button variant="grey">
            Login
            <Enter />
          </Button>
        </div>
      </nav>
      <section className={st.burgerMenu}>
        <BurgerMenu />
      </section>
    </header>
  );
}
