export const shouldItLive = (state, neighborsCount) => {
    const isAlive = state === 1;
    if (!isAlive && neighborsCount === 3) {
        return 1;
    }
    if (isAlive && (neighborsCount < 2 || neighborsCount > 3)) {
        return 0;
    }
    return state;
};
//# sourceMappingURL=cell.js.map