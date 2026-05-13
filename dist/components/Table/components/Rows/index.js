import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { concatStyles } from "../../../../utils/concatStyles";
import { Fragment, useMemo } from "react";
import { Row } from "../../../../components/Table/components/Row";
import { getIdentifierIndex, reorderCells } from "../../../../components/Table/utils";
import styles from "../../styles.module.scss";
import { FakeRows } from "../FakeRows";
export var Rows = function (_a) {
    var _b;
    var keyExtractor = _a.keyExtractor, data = _a.data, renderRow = _a.renderRow, columns = _a.columns, onRowClick = _a.onRowClick, limit = _a.limit, isLoading = _a.isLoading, hasPagination = _a.hasPagination, isMobile = _a.isMobile, groups = _a.groups;
    var identifierIndex = useMemo(function () { return getIdentifierIndex(columns); }, [columns]);
    var columnsHeader = useMemo(function () {
        var columnsText = columns.map(function (column) { var _a; return ((_a = column === null || column === void 0 ? void 0 : column.props) === null || _a === void 0 ? void 0 : _a.children) || null; });
        if (isMobile)
            return reorderCells(columnsText, identifierIndex);
        return columnsText;
    }, [columns, isMobile]);
    var hasClickBehavior = typeof onRowClick === "function";
    var rowClassName = concatStyles([
        styles.row,
        hasClickBehavior ? styles.row_hover : "",
        hasPagination ? styles.hasPagination : "",
    ]);
    var groupedData = useMemo(function () {
        if (!groups)
            return null;
        var map = new Map();
        data === null || data === void 0 ? void 0 : data.forEach(function (item) {
            var key = groups.by(item);
            if (!map.has(key))
                map.set(key, []);
            map.get(key).push(item);
        });
        return Array.from(map.entries()).map(function (_a) {
            var key = _a[0], items = _a[1];
            return ({ key: key, items: items });
        });
    }, [data, groups]);
    if (isLoading) {
        return (_jsx(FakeRows, { identifierIndex: identifierIndex, limit: limit, columnsHeader: columnsHeader, className: rowClassName, isMobile: isMobile }));
    }
    if (groupedData) {
        var globalIndex_1 = 0;
        return groupedData.map(function (_a) {
            var key = _a.key, items = _a.items;
            return (_jsxs(Fragment, { children: [_jsx("div", { className: styles.groupSeparator, children: groups.renderSeparator(key, items) }), items.map(function (row) {
                        var idx = globalIndex_1++;
                        return (_jsx(Row, { rowKey: keyExtractor(row, idx), row: renderRow(row), columns: columnsHeader, identifierIndex: identifierIndex, className: rowClassName, onClick: function () { return onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(row); }, isMobile: isMobile }, "row-".concat(keyExtractor(row, idx))));
                    })] }, key));
        });
    }
    return (_b = data === null || data === void 0 ? void 0 : data.map) === null || _b === void 0 ? void 0 : _b.call(data, function (row, index) {
        return (_jsx(Row, { rowKey: keyExtractor(row, index), row: renderRow(row), columns: columnsHeader, identifierIndex: identifierIndex, className: rowClassName, onClick: function () { return onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(row); }, isMobile: isMobile }, "row-".concat(keyExtractor(row, index))));
    });
};
