var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function getIdentifierIndex(columns) {
    var index = columns.findIndex(function (column) { var _a; return (_a = column.props) === null || _a === void 0 ? void 0 : _a.identifier; });
    return index >= 0 ? index : 0;
}
export function reorderCells(cells, identifierIndex) {
    return __spreadArray(__spreadArray([
        cells[identifierIndex]
    ], cells.slice(0, identifierIndex), true), cells.slice(identifierIndex + 1), true);
}
