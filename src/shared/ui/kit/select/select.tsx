'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { ChevronDown } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';

import st from './select.module.scss';
import { SelectOption } from './types';

export function Select({
  options,
  value,
  onChange,
  textWeight = 500,
}: {
  options: SelectOption[];
  value: string;
  textWeight?: 400 | 500;
  onChange?: (value: string) => void;
}) {
  return (
    <Root>
      <DropdownMenuTrigger className={st.selectTrigger}>
        <Text weight={textWeight}>{value}</Text>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className={st.selectContent} sideOffset={10}>
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className={st.selectItem}
              onClick={() => onChange?.(option.value)}
            >
              <Text weight={textWeight}>{option.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
