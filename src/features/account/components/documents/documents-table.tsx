'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import type { Document } from '@/features/account/lib/types';

import { downloadFile } from '@/shared/lib/browser';
import { columnDefBuilder } from '@/shared/lib/table';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import st from '../orders/orders.module.scss';

const getColumns = (t: ReturnType<typeof useTranslations>) =>
  columnDefBuilder<Document>([
    {
      accessorKey: 'orderId',
      header: t('orderId', { fallback: 'Order ID' }),
      size: 200,
      cell: ({ getValue }) => (
        <Text size="lg" color="deepBlack" weight={400}>
          {getValue<string>()}
        </Text>
      ),
    },
    {
      accessorKey: 'services',
      header: t('services', { fallback: 'Services' }),
      size: 200,
      cell: ({ getValue }) => (
        <Text
          size="lg"
          color="deepBlack"
          weight={400}
          className={st.servicesLine}
        >
          {getValue<string>()}
        </Text>
      ),
    },
    {
      accessorKey: 'documentation',
      header: t('documentation', { fallback: 'Documentation' }),
      size: 200,
      cell: ({ getValue }) => {
        return (
          <button
            className={st.downloadBtn}
            disabled={!getValue<string>()}
            onClick={() =>
              getValue<string>()
                ? downloadFile({
                    url: getValue<string>(),
                    fileName: 'invoice.pdf',
                  })
                : null
            }
          >
            <Text size="lg" color="deepBlack" weight={400} underline>
              {t('download', { fallback: 'DOWNLOAD' })}
            </Text>
          </button>
        );
      },
    },
  ]);

export function DocumentsTable({ values }: { values: Document[] }) {
  const t = useTranslations('account.documents');

  const columns = useMemo(() => getColumns(t), [t]);

  return (
    <div>
      <Table data={values} columns={columns} columnFullWidth />
    </div>
  );
}
