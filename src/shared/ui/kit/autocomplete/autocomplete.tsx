'use client';

import { useState } from 'react';

import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';

import st from './autocomplete.module.scss';

export function Autocomplete({
  items,
  placeholder,
  label,
  hint,
  onChange,
}: {
  items: { value: string; label: string }[];
  placeholder?: string;
  label?: string;
  hint?: string;
  onChange?: (value: string) => void;
}) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = search
    ? items.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  const handleSelect = (label: string) => {
    setSearch(label);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <TextField
        value={search}
        label={label}
        hint={hint}
        placeholder={placeholder}
        onChange={e => {
          setSearch(e.target.value);
          onChange?.(e.target.value);
          setIsOpen(true);
        }}
      />
      {isOpen && search && (
        <ul className={st.dropdown}>
          {filteredItems.length ? (
            filteredItems.map(item => (
              <li
                key={item.value}
                onClick={() => handleSelect(item.label)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                }}
              >
                <Text size="lg" color="darkGrey">
                  {item.label}
                </Text>
              </li>
            ))
          ) : (
            <div style={{ padding: '8px' }}>
              <Text size="lg" color="darkGrey">
                No Results
              </Text>
            </div>
          )}
        </ul>
      )}
    </div>
  );
}
