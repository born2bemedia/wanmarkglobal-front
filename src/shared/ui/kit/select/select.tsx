'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { ArrowDown } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';

import st from './select.module.scss';
import { SelectOption } from './types';

export function Select({
  options,
  value,
  onChange,
}: {
  options: SelectOption[];
  value: string;
  onChange?: (value: string) => void;
}) {
  return (
    <Root>
      <DropdownMenuTrigger className={st.selectTrigger}>
        <Text weight={500}>{value}</Text>
        <ArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className={st.selectContent} sideOffset={10}>
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className={st.selectItem}
              onClick={() => onChange?.(option.value)}
            >
              <Text weight={500}>{option.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
