'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { paymentIcon, statusIcon } from '@/features/account/lib/status-icon';
import type { Order } from '@/features/account/lib/types';

import { downloadFile } from '@/shared/lib/browser';
import { format } from '@/shared/lib/date';
import { columnDefBuilder } from '@/shared/lib/table';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import st from './orders.module.scss';

const getColumns = (t: ReturnType<typeof useTranslations>) =>
  columnDefBuilder<Order>([
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
      accessorKey: 'orderDate',
      header: t('orderDate', { fallback: 'Order Date' }),
      size: 200,
      cell: ({ getValue }) => (
        <Text size="lg" color="deepBlack" weight={400}>
          {format(getValue<string>(), 'dd-MM-yyyy')}
        </Text>
      ),
    },
    {
      accessorKey: 'services',
      header: t('services', { fallback: 'Services' }),
      size: 200,
      cell: ({ getValue }) => {
        return (
          <Text
            size="lg"
            color="deepBlack"
            weight={400}
            className={st.servicesLine}
          >
            {getValue<string[]>().join(', ')}
          </Text>
        );
      },
    },
    {
      accessorKey: 'orderStatus',
      header: t('orderStatus', { fallback: 'Order Status' }),
      size: 200,
      cell: ({ getValue }) => (
        <Text
          size="lg"
          color="deepBlack"
          weight={400}
          className={st.status}
          capitalize
        >
          {getValue<string>()}
          {statusIcon[getValue<string>()]?.()}
        </Text>
      ),
    },
    {
      accessorKey: 'paymentMethod',
      header: t('paymentMethod', { fallback: 'Payment Method' }),
      size: 200,
      cell: ({ getValue }) => (
        <Text
          size="lg"
          color="deepBlack"
          weight={400}
          className={st.status}
          capitalize
        >
          {getValue<string>() ?? 'Awaiting Payment'}
          {paymentIcon[getValue<string>() ?? 'awaitingPayment']?.()}
        </Text>
      ),
    },
    {
      accessorKey: 'getInvoice',
      header: t('getInvoice', { fallback: 'Get Invoice' }),
      size: 200,
      cell: ({ getValue }) => (
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
      ),
    },
  ]);

export function OrdersTable({ values }: { values: Order[] }) {
  const t = useTranslations('account.orders');

  const columns = useMemo(() => getColumns(t), [t]);

  return (
    <div>
      <Table data={values} columns={columns} columnFullWidth />
    </div>
  );
}
