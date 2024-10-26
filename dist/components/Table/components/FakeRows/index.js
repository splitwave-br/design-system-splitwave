"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeRows = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Row_1 = require("../../../../components/Table/components/Row");
const Cell_1 = require("../Cell");
const LIMIT = 15;
const FakeRows = ({ limit, isMobile, identifierIndex, columnsHeader, className, }) => {
    return Array.from({ length: limit || LIMIT }).map((_, index) => ((0, jsx_runtime_1.jsx)(Row_1.Row, { rowKey: `skeleton-${index}`, row: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: columnsHeader.map(() => ((0, jsx_runtime_1.jsx)(Cell_1.Cell.Skeleton, {}))) }), columns: columnsHeader, identifierIndex: identifierIndex, className: className, isMobile: isMobile }, `row-skeleton-${index}`)));
};
exports.FakeRows = FakeRows;
