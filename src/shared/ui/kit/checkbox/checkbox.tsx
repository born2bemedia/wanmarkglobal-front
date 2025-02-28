import { Indicator, Root } from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/styles';
import { Check } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';

import st from './checkbox.module.scss';

export function Checkbox({
  label,
  onCheckedChange,
  checked = false,
  variant = 'primary',
}: {
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  variant?: 'primary' | 'secondary';
}) {
  const rootClasses = cn(st.checkboxRoot, {
    [st.primaryVariant]: variant === 'primary',
    [st.secondaryVariant]: variant === 'secondary',
  });

  return (
    <div className={st.layout}>
      <Root
        className={rootClasses}
        id="c1"
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Indicator className={st.checkboxIndicator}>
          <Check />
        </Indicator>
      </Root>
      <label htmlFor="c1">
        <Text color="darkBlue" className={st.label}>
          {label}
        </Text>
      </label>
    </div>
  );
}
