import { NextPageContext } from 'next';

type LanguageDescriptor = {
  name: string;
  title: string;
};

export type LanguageConfig = {
  languages: LanguageDescriptor[];
  defaultLanguage: string;
};

export type UseLanguageSwitcherOptions = {
  context?: NextPageContext;
};
