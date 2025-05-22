import { allowedCountries as aCountries } from '@/shared/lib/countries';

export const allowedCountries = Object.values(aCountries).map(({ name }) => ({
  value: name,
  label: name,
}));
