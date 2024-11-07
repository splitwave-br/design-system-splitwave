import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Row } from "../../../../components/Table/components/Row";
import { Cell } from "../Cell";
var LIMIT = 15;
export var FakeRows = function (_a) {
    var limit = _a.limit, isMobile = _a.isMobile, identifierIndex = _a.identifierIndex, columnsHeader = _a.columnsHeader, className = _a.className;
    return Array.from({ length: limit || LIMIT }).map(function (_, index) { return (_jsx(Row, { rowKey: "skeleton-".concat(index), row: _jsx(_Fragment, { children: columnsHeader.map(function () { return (_jsx(Cell.Skeleton, {})); }) }), columns: columnsHeader, identifierIndex: identifierIndex, className: className, isMobile: isMobile }, "row-skeleton-".concat(index))); });
};
