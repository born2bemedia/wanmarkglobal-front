'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LoginDialog } from '@/core/auth/components';
import { UserBadge } from '@/core/user/components';

import { BurgerMenu } from '@/features/burger-menu/components';
import { EmptyCartDialog } from '@/features/cart/components';
import { getCartProducts } from '@/features/cart/services';
import { LanguageSwitcher } from '@/features/lang-switcher/components';

import { cn } from '@/shared/lib/styles';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Bag } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

export function Header() {
  const [cartDialogOpen, setCartDialogOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const t = useTranslations('header');
  const router = useRouter();

  const openCartHandler = () => {
    const cartProducts = getCartProducts();

    if (cartProducts.length) {
      router.push('/cart');
    } else {
      setCartDialogOpen(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(st.header, { [st.scrolled]: scrolled })}>
      <section className={st.logoAndLinks}>
        <Link href="/">
          <Image src="/full-logo.svg" alt="Wanmark" width={130} height={25} />
        </Link>
        <section className={cn(st.toolbar, st.networks)}>
          <span className={st.select}>
            <LanguageSwitcher />
          </span>
          <SocialNetworks />
        </section>
      </section>
      <EmptyCartDialog open={cartDialogOpen} onOpen={setCartDialogOpen} />
      <LoginDialog />
      <nav className={cn(st.toolbar, st.nav)}>
        <Select
          options={[
            {
              value: '/business-consulting',
              label: t('businessConsulting', {
                fallback: 'Business Consulting',
              }),
            },
            {
              value: '/marketing-consulting',
              label: t('marketingConsulting', {
                fallback: 'Marketing Consulting',
              }),
            },
            {
              value: '/growth-solutions',
              label: t('growthSolutions', {
                fallback: 'Growth Solutions',
              }),
            },
          ]}
          value={t('services', { fallback: 'Services' })}
          textWeight={500}
          onChange={value => router.push(value)}
        />
        <Link href="/market-cases">
          <Text weight={500}>
            {t('marketCases', { fallback: 'Market Cases' })}
          </Text>
        </Link>
        <Select
          options={[
            {
              value: '/about-us',
              label: t('aboutUs', { fallback: 'About Us' }),
            },
            {
              value: '/faq',
              label: t('faq', { fallback: 'FAQ' }),
            },
            {
              value: '/how-we-work',
              label: t('howWeWork', { fallback: 'How We Work' }),
            },
          ]}
          value={t('company', { fallback: 'Company' })}
          textWeight={500}
          onChange={value => router.push(value)}
        />
        <Link href="/pricing">
          <Text weight={500}>{t('pricing', { fallback: 'Pricing' })}</Text>
        </Link>
        <div className={st.navBtns}>
          <Button variant="grey" onClick={openCartHandler}>
            <Text weight={500}>{t('cart', { fallback: 'Cart' })}</Text>
            <Bag />
          </Button>
          <UserBadge />
        </div>
      </nav>
      <section className={st.burgerMenu}>
        <BurgerMenu />
      </section>
    </header>
  );
}
