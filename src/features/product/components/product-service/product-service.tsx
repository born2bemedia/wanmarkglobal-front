'use client';

import { Checkbox } from '@/shared/ui/kit/checkbox';

import st from './product-service.module.scss';

export function ProductService({
  name,
  checked,
  onCheckedChange,
  icon,
}: {
  name: string;
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  icon?: React.ReactNode;
}) {
  return (
    <article className={st.layout}>
      <Checkbox
        label={name}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      {icon}
    </article>
  );
}
