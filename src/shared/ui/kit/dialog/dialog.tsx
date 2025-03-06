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

import { cn } from '@/shared/lib/styles';
import { Button } from '@/shared/ui/kit/button';

import st from './dialog.module.scss';

export function Dialog({
  trigger,
  children,
  open,
  onOpenChange,
  layoutClassName,
  contentClassName,
  contentLayoutClassName,
  withDecor = false,
  hideCloseBtn = false,
}: {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  withDecor?: boolean;
  hideCloseBtn?: boolean;
  layoutClassName?: string;
  contentClassName?: string;
  contentLayoutClassName?: string;
}) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild={!!trigger}>{trigger ? trigger : null}</Trigger>
      <Portal>
        <Overlay className={st.overlay} />
        <Content className={cn(st.content, contentClassName)}>
          <section className={cn(st.contentLayout, contentLayoutClassName)}>
            <Title />
            <Description
              className={cn(st.layoutClass, layoutClassName)}
              style={{ height: '100%' }}
              asChild
            >
              <section>
                {children}
                {hideCloseBtn ? null : (
                  <Close asChild>
                    <Button variant="black" className={st.close}>
                      Close
                    </Button>
                  </Close>
                )}
              </section>
            </Description>
          </section>
          {withDecor ? (
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
          ) : null}
        </Content>
      </Portal>
    </Root>
  );
}
