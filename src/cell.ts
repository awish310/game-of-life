import { CellState } from "./types.js";

export const shouldItLive = (
  state: CellState,
  neighborsCount: number
): CellState => {
  const isAlive = state === 1;

  if (!isAlive && neighborsCount === 3) {
    return 1;
  }
  if (isAlive && (neighborsCount < 2 || neighborsCount > 3)) {
    return 0;
  }

  return state;
};
