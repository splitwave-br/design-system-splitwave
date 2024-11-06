import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, Fragment } from "react";
import { reorderCells } from "../../../../components/Table/utils";
import styles from "../../styles.module.scss";
export var Row = function (_a) {
    var rowKey = _a.rowKey, row = _a.row, columns = _a.columns, identifierIndex = _a.identifierIndex, className = _a.className, onClick = _a.onClick, isMobile = _a.isMobile;
    var cells = useMemo(function () {
        var cellsChildren = row.props.children;
        if (isMobile)
            return reorderCells(cellsChildren, identifierIndex);
        return cellsChildren;
    }, [row]);
    return (_jsx("div", { className: className, onClick: onClick, children: cells.map(function (cell, index) { return (_jsxs(Fragment, { children: [isMobile && columns[index] && (_jsx("div", { className: styles.columnHeader, children: columns[index] })), cell] }, "cell-".concat(rowKey, "-").concat(index))); }) }));
};
