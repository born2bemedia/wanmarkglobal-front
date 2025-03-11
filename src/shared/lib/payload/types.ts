export type Node = {
  type: string;
  tag: string;
  text?: string;
  listType?: 'bullet' | 'number';
  fields?: {
    columns: { header: string }[];
    rows: { cells: { value: string }[] }[];
    url?: string;
    newTab?: boolean;
  };
  format: number;
  children?: Node[];
};
