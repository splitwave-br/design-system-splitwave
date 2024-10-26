"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rows = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const concatStyles_1 = require("../../../../utils/concatStyles");
const react_1 = require("react");
const Row_1 = require("../../../../components/Table/components/Row");
const utils_1 = require("../../../../components/Table/utils");
const styles_module_scss_1 = __importDefault(require("../../styles.module.scss"));
const FakeRows_1 = require("../FakeRows");
const LIMIT = 15;
const Rows = ({ keyExtractor, data, renderRow, columns, onRowClick, limit, isLoading, isMobile, }) => {
    const identifierIndex = (0, react_1.useMemo)(() => (0, utils_1.getIdentifierIndex)(columns), [columns]);
    const columnsHeader = (0, react_1.useMemo)(() => {
        const columnsText = columns.map((column) => column.props.children);
        if (isMobile)
            return (0, utils_1.reorderCells)(columnsText, identifierIndex);
        return columnsText;
    }, [columns, isMobile]);
    const hasClickBehavior = typeof onRowClick === "function";
    const rowClassName = (0, concatStyles_1.concatStyles)([
        styles_module_scss_1.default.row,
        hasClickBehavior ? styles_module_scss_1.default.row_hover : "",
    ]);
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)(FakeRows_1.FakeRows, { identifierIndex: identifierIndex, limit: limit, columnsHeader: columnsHeader, className: rowClassName, isMobile: isMobile }));
    }
    return data?.map?.((row, index) => {
        return ((0, jsx_runtime_1.jsx)(Row_1.Row, { rowKey: keyExtractor(row, index), row: renderRow(row), columns: columnsHeader, identifierIndex: identifierIndex, className: rowClassName, onClick: () => onRowClick?.(row), isMobile: isMobile }, `row-${keyExtractor(row, index)}`));
    });
};
exports.Rows = Rows;
