'use client';

import { JSX } from 'react';
import Link from 'next/link';

import { BurgerMenu } from '@/features/burger-menu/components';

import { cn } from '@/shared/lib/styles';
import { Facebook, Instagram, X } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

const socialNetworks = [
  { icon: <Instagram />, link: 'https://instagram.com/' },
  { icon: <X />, link: 'https://x.com/' },
  { icon: <Facebook />, link: 'https://www.facebook.com/' },
];

export function Header() {
  return (
    <header className={st.header}>
      <section className={st.logoAndLinks}>
        <div>[BRAND] LOGO</div>
        <section className={cn(st.toolbar, st.networks)}>
          <span className={st.select}>
            <Select options={[{ label: 'ENG', value: 'ENG' }]} value="ENG" />
          </span>
          {socialNetworks.map(({ link, icon }) => (
            <SocialNetwork key={link} link={link} icon={icon} />
          ))}
        </section>
      </section>
      <nav className={cn(st.toolbar, st.nav)}>
        <Text>Services</Text>
        <Text>Market Cases</Text>
        <Text>Company</Text>
        <Text>Pricing</Text>
        <div className={st.navBtns}>
          <Button variant="grey">Cart</Button>
          <Button variant="grey">Login</Button>
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
