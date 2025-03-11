'use client';

import { DocumentsTable } from '@/features/account/components/documents/documents-table';
import type { Document } from '@/features/account/lib/types';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';

export function Documents({ values }: { values: Document[] }) {
  return (
    <TabLayout>
      <TabHeading
        title="Your Documents"
        desc="Track your order fulfillment progress and download reports,
          strategies, guides, and other provided documents."
      />
      <DocumentsTable values={values} />
    </TabLayout>
  );
}
