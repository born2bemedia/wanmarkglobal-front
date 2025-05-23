'use client';

import { paymentIcon, statusIcon } from '@/features/account/lib/status-icon';
import type { Order } from '@/features/account/lib/types';

import { downloadFile } from '@/shared/lib/browser';
import { format } from '@/shared/lib/date';
import { columnDefBuilder } from '@/shared/lib/table';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import st from './orders.module.scss';

const columns = columnDefBuilder<Order>([
  {
    accessorKey: 'orderId',
    header: 'Order ID',
    size: 200,
    cell: ({ getValue }) => (
      <Text size="lg" color="deepBlack" weight={400}>
        {getValue<string>()}
      </Text>
    ),
  },
  {
    accessorKey: 'orderDate',
    header: 'Order Date',
    size: 200,
    cell: ({ getValue }) => (
      <Text size="lg" color="deepBlack" weight={400}>
        {format(getValue<string>(), 'dd-MM-yyyy')}
      </Text>
    ),
  },
  {
    accessorKey: 'services',
    header: 'Services',
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
    header: 'Order Status',
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
    header: 'Payment Method',
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
    header: 'Get Invoice',
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
          DOWNLOAD
        </Text>
      </button>
    ),
  },
]);

export function OrdersTable({ values }: { values: Order[] }) {
  return (
    <div>
      <Table data={values} columns={columns} columnFullWidth />
    </div>
  );
}
