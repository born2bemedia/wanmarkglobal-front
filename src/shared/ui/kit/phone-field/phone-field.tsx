'use client';

import {
  defaultCountries,
  PhoneInput,
  PhoneInputProps,
} from 'react-international-phone';

import { excludedCountries } from '@/shared/lib/countries';
import { Text } from '@/shared/ui/kit/text';

import 'react-international-phone/style.css';
import st from './phone-field.module.scss';

export function PhoneField({
  country,
  label,
  hint,
  ...args
}: PhoneInputProps & {
  country?: string;
  label?: string;
  hint?: string;
}) {
  return (
    <label className={st.layout}>
      <Text color="darkBlue" className={st.label}>
        {label}
      </Text>
      <PhoneInput
        defaultCountry={
          defaultCountries.some(
            ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2),
          )
            ? country
            : 'us'
        }
        countries={defaultCountries.filter(
          ([, iso2]) => !excludedCountries.includes(iso2),
        )}
        className={st.container}
        inputClassName={st.phoneField}
        countrySelectorStyleProps={{
          buttonClassName: st.dropdown,
          dropdownStyleProps: {
            className: st.dropdownList,
          },
          dropdownArrowClassName: st.arrow,
        }}
        {...args}
      />
      {hint && (
        <Text color="lightBlue" className={st.hint}>
          {hint}
        </Text>
      )}
    </label>
  );
}
