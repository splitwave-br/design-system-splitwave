import { jsx as _jsx } from "react/jsx-runtime";
import { concatStyles } from "../../../../utils/concatStyles";
import { useMemo } from "react";
import { Row } from "../../../../components/Table/components/Row";
import { getIdentifierIndex, reorderCells } from "../../../../components/Table/utils";
import styles from "../../styles.module.scss";
import { FakeRows } from "../FakeRows";
var LIMIT = 15;
export var Rows = function (_a) {
    var _b;
    var keyExtractor = _a.keyExtractor, data = _a.data, renderRow = _a.renderRow, columns = _a.columns, onRowClick = _a.onRowClick, limit = _a.limit, isLoading = _a.isLoading, isMobile = _a.isMobile;
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
    ]);
    if (isLoading) {
        return (_jsx(FakeRows, { identifierIndex: identifierIndex, limit: limit, columnsHeader: columnsHeader, className: rowClassName, isMobile: isMobile }));
    }
    return (_b = data === null || data === void 0 ? void 0 : data.map) === null || _b === void 0 ? void 0 : _b.call(data, function (row, index) {
        return (_jsx(Row, { rowKey: keyExtractor(row, index), row: renderRow(row), columns: columnsHeader, identifierIndex: identifierIndex, className: rowClassName, onClick: function () { return onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(row); }, isMobile: isMobile }, "row-".concat(keyExtractor(row, index))));
    });
};
