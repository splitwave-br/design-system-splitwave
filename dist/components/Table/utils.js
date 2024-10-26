"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdentifierIndex = getIdentifierIndex;
exports.reorderCells = reorderCells;
function getIdentifierIndex(columns) {
    const index = columns.findIndex((column) => column.props?.identifier);
    return index >= 0 ? index : 0;
}
function reorderCells(cells, identifierIndex) {
    return [
        cells[identifierIndex],
        ...cells.slice(0, identifierIndex),
        ...cells.slice(identifierIndex + 1),
    ];
}
