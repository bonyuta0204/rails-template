export type TableData = {
  headers: Header[];
  rows: Row[];
};

export type Row = {
  id: number;
  title: string;
  cells: Cell[];
  subRows?: Row[];
};

export type Cell = {
  value: number;
};

export type Header = {
  label: string;
  width: number;
}[];

export type DisplayRow = Row & {
  isOpen: boolean;
};

export type RowOpenState = Record<Row["id"], DisplayRow["isOpen"]>;
