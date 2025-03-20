'use client';

import type { ReactNode } from 'react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { ChevronDown } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';

import st from './switcher.module.scss';

export function Switcher({
  options,
  value,
  onChange,
}: {
  options: { label: ReactNode; value: string }[];
  value: ReactNode;
  onChange: (value: string) => void;
}) {
  return (
    <Root>
      <DropdownMenuTrigger className={st.selectTrigger}>
        <Text>{value}</Text>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className={st.selectContent} sideOffset={10}>
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className={st.selectItem}
              onClick={() => onChange(option.value)}
            >
              <Text color="blackPurple" size="sm">
                {option.label}
              </Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
