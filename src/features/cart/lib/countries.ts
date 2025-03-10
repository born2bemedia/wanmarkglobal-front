import { countries, excludedCountries } from '@/shared/lib/countries';

const filteredCountries = Object.fromEntries(
  Object.entries(countries).filter(
    ([code]) => !excludedCountries.includes(code),
  ),
);

const baseCountries = Object.values(filteredCountries).map(({ name }) => ({
  value: name,
  label: name,
}));

export const allowedCountries = [
  ...baseCountries,
  { value: 'United States', label: 'United States' },
];
