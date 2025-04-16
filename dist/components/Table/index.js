import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import { Pagination } from "./components/Pagination";
import { Cell } from "./components/Cell";
import { Header } from "./components/Header";
import { usePagination } from "./hooks/usePagination";
import { useMemo } from "react";
import "./variables.scss";
import { COLUMNS_WIDTH } from "./components/Header/constants";
import useWindowSize from "../../hooks/useWindowSize";
import { Rows } from "./components/Rows";
export var Table = function (_a) {
    var _b;
    var data = _a.data, onRowClick = _a.onRowClick, _c = _a.isEmpty, isEmpty = _c === void 0 ? false : _c, _d = _a.keyExtractor, keyExtractor = _d === void 0 ? function (item) { return item.id; } : _d, renderHeader = _a.renderHeader, renderRow = _a.renderRow, renderEmptyState = _a.renderEmptyState, pagination = _a.pagination;
    var LIMIT = (_b = pagination === null || pagination === void 0 ? void 0 : pagination.limit) !== null && _b !== void 0 ? _b : 15;
    var isMobile = useWindowSize().isMobile;
    var staticPagination = usePagination({ rows: data, limit: LIMIT });
    var _e = pagination || staticPagination, currentPage = _e.currentPage, pages = _e.pages, onClickNextPage = _e.onClickNextPage, onPageInputChange = _e.onPageInputChange, onClickPrevPage = _e.onClickPrevPage, totalPages = _e.totalPages, isLoading = _e.isLoading;
    var pageData = useMemo(function () {
        return (pages === null || pages === void 0 ? void 0 : pages[currentPage]) || data;
    }, [pages, currentPage, data]);
    var header = useMemo(function () { return renderHeader(); }, [renderHeader]);
    var columns = useMemo(function () { var _a; return ((_a = header === null || header === void 0 ? void 0 : header.props) === null || _a === void 0 ? void 0 : _a.children) || undefined; }, [header]);
    var gridTemplateColumns = useMemo(function () {
        if (isMobile)
            return "auto 1fr";
        return columns
            .map(function (column) {
            var _a;
            if (!column) {
                return;
            }
            var columnWidth = COLUMNS_WIDTH === null || COLUMNS_WIDTH === void 0 ? void 0 : COLUMNS_WIDTH[(_a = column.type) === null || _a === void 0 ? void 0 : _a.displayName];
            var _b = column.props, width = _b.width, minWidth = _b.minWidth;
            if (width || (columnWidth === null || columnWidth === void 0 ? void 0 : columnWidth.width))
                return width || (columnWidth === null || columnWidth === void 0 ? void 0 : columnWidth.width);
            if (minWidth || (columnWidth === null || columnWidth === void 0 ? void 0 : columnWidth.minWidth))
                return "minmax(".concat(minWidth || (columnWidth === null || columnWidth === void 0 ? void 0 : columnWidth.minWidth), ", 1fr)");
            return "1fr";
        })
            .join(" ");
    }, [columns, isMobile]);
    return (_jsxs("div", { className: styles.wrapper, children: [_jsxs("div", { className: styles.table, style: { gridTemplateColumns: gridTemplateColumns }, children: [!isMobile && header && _jsx("div", { className: styles.header, children: header }), isEmpty && renderEmptyState && renderEmptyState(), _jsx(Rows, { limit: LIMIT, keyExtractor: keyExtractor, data: pageData, renderRow: renderRow, columns: columns, onRowClick: onRowClick, isLoading: isLoading, isMobile: isMobile })] }), !isEmpty && totalPages > 1 && (_jsx("div", { className: styles.footer, children: _jsx(Pagination, { currentPage: currentPage, totalPages: totalPages, handleClickNextPage: !isLoading ? onClickNextPage : function () { }, handlePageInputChange: !isLoading ? onPageInputChange : function () { }, handleClickPrevPage: !isLoading ? onClickPrevPage : function () { } }) }))] }));
};
export { Cell, Header, Pagination };
