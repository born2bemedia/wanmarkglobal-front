'use client';

import { useEffect, useRef, useState } from 'react';

import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';

import st from './autocomplete.module.scss';

export function Autocomplete({
  items,
  placeholder,
  label,
  hint,
  initialValue,
  onChange,
  disabled,
}: {
  items: { value: string; label: string }[];
  onChange?: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  label?: string;
  hint?: string;
  disabled?: boolean;
}) {
  const [search, setSearch] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const autocompleteRef = useRef<HTMLDivElement>(null);

  const filteredItems = search
    ? items.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  const handleSelect = (label: string) => {
    setSearch(label);
    onChange?.(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={autocompleteRef} style={{ position: 'relative', width: '100%' }}>
      <TextField
        value={search}
        label={label}
        hint={hint}
        disabled={disabled}
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
