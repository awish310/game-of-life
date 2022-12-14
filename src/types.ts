export type CellCoordinates = {
  col: number;
  row: number;
};

export type CellState = 0 | 1;

export type InitialState = {
  cols: number;
  rows: number;
  aliveCells: Array<CellCoordinates>;
};

export type Grid = Array<Array<CellState>>;

export enum Chars {
  EMPTY = " ",
  ALIVE = "*",
  BORDER = "|",
}
