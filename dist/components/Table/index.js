"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Cell = exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Pagination_1 = require("./components/Pagination");
const Cell_1 = require("./components/Cell");
Object.defineProperty(exports, "Cell", { enumerable: true, get: function () { return Cell_1.Cell; } });
const Header_1 = require("./components/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
const usePagination_1 = require("./hooks/usePagination");
const react_1 = require("react");
require("./variables.scss");
const constants_1 = require("./components/Header/constants");
const useWindowSize_1 = __importDefault(require("../../hooks/useWindowSize"));
const Rows_1 = require("./components/Rows");
const Table = ({ data, onRowClick, isEmpty = false, keyExtractor = (item) => item.id, renderHeader, renderRow, renderEmptyState, pagination, }) => {
    const { isMobile } = (0, useWindowSize_1.default)();
    const staticPagination = (0, usePagination_1.usePagination)({ rows: data });
    const { currentPage, pages, onClickNextPage, onClickOnPage, onClickPrevPage, totalPages, isLoading, limit, } = pagination || staticPagination;
    const pageData = (0, react_1.useMemo)(() => {
        return pages?.[currentPage] || data;
    }, [pages, currentPage, data]);
    const header = (0, react_1.useMemo)(() => renderHeader(), [renderHeader]);
    const columns = (0, react_1.useMemo)(() => header.props.children, [header]);
    const gridTemplateColumns = (0, react_1.useMemo)(() => {
        if (isMobile)
            return "auto 1fr";
        return columns
            .map((column) => {
            const columnWidth = constants_1.COLUMNS_WIDTH?.[column.type?.displayName];
            const { width, minWidth } = column.props;
            if (width || columnWidth?.width)
                return width || columnWidth?.width;
            if (minWidth || columnWidth?.minWidth)
                return `minmax(${minWidth || columnWidth?.minWidth}, 1fr)`;
            return "1fr";
        })
            .join(" ");
    }, [columns, isMobile]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.wrapper, children: [(0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.table, style: { gridTemplateColumns }, children: [!isMobile && (0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.header, children: header }), isEmpty && renderEmptyState && renderEmptyState(), (0, jsx_runtime_1.jsx)(Rows_1.Rows, { limit: limit, keyExtractor: keyExtractor, data: pageData, renderRow: renderRow, columns: columns, onRowClick: onRowClick, isLoading: isLoading, isMobile: isMobile })] }), !isEmpty && totalPages > 1 && ((0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.footer, children: (0, jsx_runtime_1.jsx)(Pagination_1.Pagination, { currentPage: currentPage, totalPages: totalPages, handleClickNextPage: !isLoading ? onClickNextPage : () => { }, handleClickOnPage: !isLoading ? onClickOnPage : () => { }, handleClickPrevPage: !isLoading ? onClickPrevPage : () => { } }) }))] }));
};
exports.Table = Table;
