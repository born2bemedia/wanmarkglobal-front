import { type ColumnDef } from '.';

export const columnDefBuilder = <T>(
  columns: ColumnDef<T>[],
): ColumnDef<T>[] => {
  return columns.map(column => ({
    ...column,
    size: column.size ?? undefined,
  }));
};
