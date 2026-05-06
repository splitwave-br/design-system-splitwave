import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "../../../../../components/Form/controls/Checkbox";
import styles from "./styles.module.scss";
export var CheckboxCell = function (_a) {
    var checked = _a.checked, onChange = _a.onChange, disabled = _a.disabled, children = _a.children;
    return (_jsxs("div", { className: styles.checkboxCell, children: [_jsx(Checkbox, { value: checked, onChange: onChange, disabled: disabled, disableHover: true, className: styles.checkboxField }), children && _jsx("div", { className: styles.cellContent, children: children })] }));
};
