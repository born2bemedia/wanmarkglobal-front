'use client';

import { useState } from 'react';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as Header,
  Trigger,
} from '@radix-ui/react-dialog';

import { Menu } from '@/shared/ui/icons';
import { Close as CloseIcon } from '@/shared/ui/icons/close';
import { Text } from '@/shared/ui/kit/text';

import st from './burger-menu.module.scss';

export function BurgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger>
        <BurgerButton />
      </Trigger>
      <Portal>
        <Overlay className={st.overlay} />
        <Content className={st.content}>
          <section className={st.contentLayout}>
            <Close className={st.close}>
              <CloseIcon />
            </Close>
            <Header />
            <Description asChild>
              <section>Menu</section>
            </Description>
          </section>
        </Content>
      </Portal>
    </Root>
  );
}

function BurgerButton() {
  return (
    <section className={st.layout}>
      <span className={st.menuLabel}>
        <Text weight={500} color="darkBlue">
          Menu
        </Text>
        <Menu />
      </span>
    </section>
  );
}
