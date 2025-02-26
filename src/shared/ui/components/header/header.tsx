'use client';

import { JSX } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { BurgerMenu } from '@/features/burger-menu/components';

import { cn } from '@/shared/lib/styles';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Bag, Enter, Facebook, Instagram, X } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

export function Header() {
  const router = useRouter();

  return (
    <header className={st.header}>
      <section className={st.logoAndLinks}>
        <div>[BRAND] LOGO</div>
        <section className={cn(st.toolbar, st.networks)}>
          <span className={st.select}>
            <Select options={[{ label: 'ENG', value: 'ENG' }]} value="ENG" />
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
        <Text>Market Cases</Text>
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

function SocialNetwork({ icon, link }: { icon: JSX.Element; link: string }) {
  return (
    <Link href={link} className={st.socialNetwork}>
      {icon}
    </Link>
  );
}
