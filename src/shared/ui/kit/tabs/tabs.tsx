'use client';

import { ReactNode } from 'react';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';

import st from './tabs.module.scss';

export function Tabs({
  values,
  children,
  defaultId = values[0].id,
}: {
  values: { id: string; label: string; onClick?: () => void }[];
  children: ReactNode;
  defaultId?: string;
}) {
  return (
    <Root className={st.root} defaultValue={defaultId}>
      <List className={st.list}>
        {values.map(({ id, label, onClick }) => (
          <Trigger key={id} className={st.trigger} value={id} onClick={onClick}>
            {label}
          </Trigger>
        ))}
      </List>
      {children}
    </Root>
  );
}

export function TabContent({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Content value={id} className={className}>
      {children}
    </Content>
  );
}
