import Image from 'next/image';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { Button } from '@/shared/ui/kit/button';

import st from './dialog.module.scss';

export function Dialog({
  trigger,
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild={!!trigger}>{trigger ? trigger : null}</Trigger>
      <Portal>
        <Overlay className={st.overlay} />
        <Content className={st.content}>
          <section className={st.contentLayout}>
            <Title />
            <Description asChild>
              <section>{children}</section>
            </Description>
            <Close asChild>
              <Button variant="black" className={st.close}>
                Close
              </Button>
            </Close>
          </section>
          <div className={st.decorElements}>
            <Image
              className={st.leftDecorElements}
              src="/dialog/left-elements.svg"
              alt="elements-1"
              width={267}
              height={189}
            />
            <Image
              className={st.rightDecorElements}
              src="/dialog/right-elements.svg"
              alt="elements-2"
              width={338}
              height={175}
            />
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
