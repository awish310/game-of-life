export const count = (row, col, grid, rows, cols) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const nRow = (row + i + rows) % rows;
            const nCol = (col + j + cols) % cols;
            sum += grid[nRow][nCol];
        }
    }
    sum -= grid[row][col];
    return sum;
};
//# sourceMappingURL=neighbors.js.map