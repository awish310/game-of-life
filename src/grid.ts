import { CellCoordinates, Chars, Grid } from "./types.js";

export const raw = (rows: number, cols: number): Grid => {
  const grid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
};

export const init = (
  rows: number,
  cols: number,
  aliveCells: Array<CellCoordinates>
): Grid => {
  if (!rows) {
    InvalidBoundaryError("rows");
  }
  if (!cols) {
    InvalidBoundaryError("cols");
  }

  const grid = raw(rows, cols);

  aliveCells.forEach(({ row, col }: CellCoordinates) => {
    if (col > cols || !col) {
      outOfBoundariesError(row, col, "cols", cols);
    }
    if (row > rows || !row) {
      outOfBoundariesError(row, col, "rows", rows);
    }

    grid[row - 1][col - 1] = 1;
  });

  return grid;
};

export const draw = (grid: Grid): string =>
  grid
    .map((row) =>
      [Chars.BORDER, ...row, Chars.BORDER]
        .map((item) => {
          if (item === Chars.BORDER) {
            return item;
          }
          return item === 0 ? Chars.EMPTY : Chars.ALIVE;
        })
        .join("")
    )
    .join("\n");

const outOfBoundariesError = (
  row: number,
  col: number,
  boundaryType: "cols" | "rows",
  boundaryValue: number
) => {
  throw new Error(
    `Initial state cell in {"row":${row}, "col":${col}} is out of boundaries. "${boundaryType}" minimum value is 1 and maximum value is ${boundaryValue}.`
  );
};

const InvalidBoundaryError = (boundaryType: "cols" | "rows") => {
  throw new Error(
    `Initial state "${boundaryType}" is invalid. "${boundaryType}" minimum value is 1.`
  );
};
