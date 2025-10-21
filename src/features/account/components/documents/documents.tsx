'use client';

import { useTranslations } from 'next-intl';

import { DocumentsTable } from '@/features/account/components/documents/documents-table';
import type { Document } from '@/features/account/lib/types';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';

export function Documents({ values }: { values: Document[] }) {
  const t = useTranslations('account.documents');

  return (
    <TabLayout>
      <TabHeading
        title={t('title', { fallback: 'Your Documents' })}
        desc={t('desc', {
          fallback:
            'Track your order fulfillment progress and download reports, strategies, guides, and other provided documents.',
        })}
      />
      <DocumentsTable values={values} />
    </TabLayout>
  );
}
