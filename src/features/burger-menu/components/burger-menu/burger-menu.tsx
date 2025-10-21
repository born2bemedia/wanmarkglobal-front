'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title as Header,
  Trigger,
} from '@radix-ui/react-dialog';

import { UserBadge } from '@/core/user/components';

import { EmptyCartDialog } from '@/features/cart/components';
import { getCartProducts } from '@/features/cart/services';
import { LanguageSwitcher } from '@/features/lang-switcher/components';

import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Bag, Menu } from '@/shared/ui/icons';
import { Close as CloseIcon } from '@/shared/ui/icons/close';
import { Button } from '@/shared/ui/kit/button';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';

import st from './burger-menu.module.scss';

export function BurgerMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [cartDialogOpen, setCartDialogOpen] = useState<boolean>(false);

  const router = useRouter();
  const t = useTranslations('header');

  const openCartHandler = () => {
    const cartProducts = getCartProducts();

    if (cartProducts.length) {
      router.push('/cart');
      setOpen(false);
    } else {
      setCartDialogOpen(true);
    }
  };

  const openPageHandler = (callback: () => void) => {
    callback();
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger>
        <BurgerButton />
      </Trigger>
      <Portal>
        <Content className={st.content}>
          <section className={st.contentLayout}>
            <Close className={st.close}>
              <Text color="mediumBlue" weight={500}>
                {t('menu', { fallback: 'Menu' })}
              </Text>
              <CloseIcon color="blue" />
            </Close>
            <Header />
            <Description asChild>
              <div className={st.wrapper}>
                <section>
                  <EmptyCartDialog
                    open={cartDialogOpen}
                    onOpen={setCartDialogOpen}
                  />
                  <Image
                    style={{ marginTop: '12px' }}
                    src="/full-logo.svg"
                    alt="logo"
                    width={130}
                    height={25}
                  />
                  <section className={st.navigationLayout}>
                    <section className={st.navBtns}>
                      <Button
                        variant="grey"
                        onClick={openCartHandler}
                        className={st.btnsInner}
                      >
                        <Text weight={500}>
                          {t('cart', { fallback: 'Cart' })}
                        </Text>
                        <Bag />
                      </Button>
                      <UserBadge className={st.btnsInner} />
                    </section>
                    <section className={st.navMenu}>
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
                        onChange={value =>
                          openPageHandler(() => router.push(value))
                        }
                      />
                      <Link href="/market-cases" onClick={() => setOpen(false)}>
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
                        onChange={value =>
                          openPageHandler(() => router.push(value))
                        }
                      />
                      <Link href="/pricing" onClick={() => setOpen(false)}>
                        <Text weight={500}>
                          {t('pricing', { fallback: 'Pricing' })}
                        </Text>
                      </Link>
                    </section>
                  </section>
                </section>
                <section className={st.footer}>
                  <LanguageSwitcher />
                  <span className={st.networks}>
                    <SocialNetworks />
                  </span>
                </section>
              </div>
            </Description>
          </section>
        </Content>
      </Portal>
    </Root>
  );
}

function BurgerButton() {
  const t = useTranslations('header');

  return (
    <section className={st.layout}>
      <span className={st.menuLabel}>
        <Text weight={500} color="darkBlue">
          {t('menu', { fallback: 'Menu' })}
        </Text>
        <Menu />
      </span>
    </section>
  );
}
