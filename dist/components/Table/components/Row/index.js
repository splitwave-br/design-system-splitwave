"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../../../components/Table/utils");
const styles_module_scss_1 = __importDefault(require("../../styles.module.scss"));
const Row = ({ rowKey, row, columns, identifierIndex, className, onClick, isMobile, }) => {
    const cells = (0, react_1.useMemo)(() => {
        const cellsChildren = row.props.children;
        if (isMobile)
            return (0, utils_1.reorderCells)(cellsChildren, identifierIndex);
        return cellsChildren;
    }, [row]);
    return ((0, jsx_runtime_1.jsx)("div", { className: className, onClick: onClick, children: cells.map((cell, index) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [isMobile && columns[index] && ((0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.columnHeader, children: columns[index] })), cell] }, `cell-${rowKey}-${index}`))) }));
};
exports.Row = Row;
