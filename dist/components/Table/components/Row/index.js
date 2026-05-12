import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, Fragment } from "react";
import { reorderCells } from "../../../../components/Table/utils";
import { CheckboxCell } from "../../../../components/Table/components/Cell/Checkbox";
import { Checkbox } from "../../../../components/Form/controls/Checkbox";
import styles from "../../styles.module.scss";
export var Row = function (_a) {
    var rowKey = _a.rowKey, row = _a.row, columns = _a.columns, identifierIndex = _a.identifierIndex, className = _a.className, onClick = _a.onClick, isMobile = _a.isMobile;
    var cells = useMemo(function () {
        var cellsChildren = row.props.children;
        if (isMobile)
            return reorderCells(cellsChildren, identifierIndex);
        return cellsChildren;
    }, [row]);
    // Find the Cell.Checkbox anywhere in the row to extract its checkbox props
    var checkboxCellElement = useMemo(function () {
        var _a;
        if (!isMobile)
            return null;
        return ((_a = cells.find(function (cell) { return (cell === null || cell === void 0 ? void 0 : cell.type) === CheckboxCell; })) !== null && _a !== void 0 ? _a : null);
    }, [cells, isMobile]);
    return (_jsx("div", { className: className, onClick: onClick, children: cells.map(function (cell, index) {
            var _a;
            var isCheckboxCell = (cell === null || cell === void 0 ? void 0 : cell.type) === CheckboxCell;
            return (_jsxs(Fragment, { children: [isMobile && columns[index] && (_jsxs("div", { className: styles.columnHeader, children: [index === 0 && checkboxCellElement && (_jsx(Checkbox, { value: checkboxCellElement.props.checked, onChange: checkboxCellElement.props.onChange, disabled: checkboxCellElement.props.disabled, disableHover: true, className: styles.checkboxField })), columns[index]] })), isMobile && isCheckboxCell ? ((_a = cell.props.children) !== null && _a !== void 0 ? _a : _jsx("div", {})) : cell] }, "cell-".concat(rowKey, "-").concat(index)));
        }) }));
};
