'use client';

import { useState } from 'react';
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';

import { cn } from '@/shared/lib/styles';
import { AccordionDef } from '@/shared/ui/kit/accordion/types';
import { toAccordionNumber } from '@/shared/ui/kit/accordion/utils';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './accordion.module.scss';

export function Accordion({
  content,
  className,
}: {
  content: AccordionDef[];
  className?: string;
}) {
  const [value, setValue] = useState<string | null>(null);

  const handleValueChange = (v: string) => {
    setValue(prev => (prev === v ? null : v));
  };

  return (
    <Root
      className={cn(st.root, className)}
      type="single"
      value={value ?? ''}
      onValueChange={handleValueChange}
      collapsible
    >
      {content.map(({ title, content: text }, i) => (
        <Item key={title} className={st.item} value={title}>
          <Separator />
          <Header className={st.header}>
            <Trigger>
              <section className={st.trigger}>
                <div className={st.orderNumLayout}>
                  <Text color="darkBlue">
                    {toAccordionNumber(i + 1)}
                    <span className={st.opacityNum}>
                      /{toAccordionNumber(content.length)}
                    </span>
                  </Text>
                  <Title
                    level={5}
                    weight={500}
                    color="darkBlue"
                    className={st.titleDesktop}
                  >
                    {title}
                  </Title>
                </div>
                <Text color="darkBlue" className={st.underline}>
                  {value === title ? 'HIDE' : 'OPEN'}
                </Text>
              </section>
              <Title
                level={5}
                weight={500}
                color="darkBlue"
                className={st.titleMobile}
              >
                {title}
              </Title>
            </Trigger>
          </Header>
          <Content className={st.content}>
            <div>{text}</div>
          </Content>
        </Item>
      ))}
    </Root>
  );
}
