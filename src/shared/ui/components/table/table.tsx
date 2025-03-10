'use client';

import { cn } from '@/shared/lib/styles';
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@/shared/lib/table';
import { Text } from '@/shared/ui/kit/text';

import st from './table.module.scss';

export function Table<TData, TColumn>({
  data,
  columns,
  className,
  columnFullWidth = false,
}: {
  data: TData[];
  columns: ColumnDef<TData, TColumn>[];
  columnFullWidth?: boolean;
  className?: string;
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const columnWidth = columnFullWidth ? `${100 / columns.length}%` : undefined;

  return (
    <div className={cn(st.tableWrapper, className)}>
      <table className={st.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className={st.headerGroup}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className={st.header}
                  style={{
                    width:
                      columnWidth || header.column.columnDef.size || 'auto',
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <tr key={row.id} className={st.rowGroup}>
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className={st.cell}
                    style={{
                      width:
                        columnWidth || cell.column.columnDef.size || 'auto',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={st.noData}>
                <Text size="xl" color="deepBlack" capitalize>
                  No Data
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
