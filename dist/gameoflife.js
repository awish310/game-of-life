import logUpdate from "log-update";
import { setInterval } from "timers";
import * as cell from "./cell.js";
import * as grid from "./grid.js";
import * as neighbors from "./neighbors.js";
import { getInitialState } from "./utils.js";
const [_, __, state_file_path, generations] = process.argv;
const { rows, cols, aliveCells } = getInitialState(state_file_path);
let board = grid.init(rows, cols, aliveCells);
const updateBoard = () => {
    const previousBoard = board;
    const nextBoard = grid.raw(rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const state = board[i][j];
            const neighborsCount = neighbors.count(i, j, previousBoard, rows, cols);
            nextBoard[i][j] = cell.shouldItLive(state, neighborsCount);
        }
    }
    board = nextBoard;
};
let loop;
let generationsCounter = 0;
loop = setInterval(() => {
    generationsCounter += 1;
    if (generationsCounter >= parseInt(generations)) {
        clearInterval(loop);
    }
    const drawing = grid.draw(board);
    logUpdate(drawing);
    updateBoard();
}, 200);
//# sourceMappingURL=gameoflife.js.map