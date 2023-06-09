export enum State {
  DANGER = "danger",
  WARNING = "warning",
  NORMAL = "normal",
}

export enum Task {
  CUSTOM_TABLE = "table",
  REACT_FLOW = "react_flow",
}

export const rowColor = {
  danger: "#ffadad7f",
  warning: "#fffead7e",
  normal: "#bdffad7e",
};

export type Column = string;

export type RowCell = string | boolean | unknown[] | Date | State | undefined

export interface Row {
  state?: State;
  [propName: string]: RowCell;
}

export const row: Row = {
  field1: true,
  field2: [10, "Some text here", true, ["foo", "bar"]],
  field3: new Date(),
  field4: "https://ya.ru/",
  field5: false,
  field6: [10, "Some text here", false, ["foo", "bar"]],
  field7: new Date(),
  field8: "http://ya.ru/",
};

export const initialItems: Row[] = [row, row, row, row, row];

export const initialColumns: Column[] = [
  "field1",
  "field2",
  "field3",
  "field4",
  "field5",
  "field6",
  "field7",
  "field8",
];
