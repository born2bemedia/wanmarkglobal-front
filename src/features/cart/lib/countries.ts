import { countries, excludedCountries } from '@/shared/lib/countries';

const filteredCountries = Object.fromEntries(
  Object.entries(countries).filter(
    ([code]) => !excludedCountries.includes(code),
  ),
);

export const allowedCountries = Object.values(filteredCountries).map(
  ({ name }) => ({
    value: name,
    label: name,
  }),
);
