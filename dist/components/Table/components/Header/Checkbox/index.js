var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "../../../../../components/Form/controls/Checkbox";
import { Header } from "../../../../../components/Table/components/Header";
import styles from "./styles.module.scss";
export var CheckboxHeader = function (_a) {
    var checked = _a.checked, onChange = _a.onChange, disabled = _a.disabled, children = _a.children, headerProps = __rest(_a, ["checked", "onChange", "disabled", "children"]);
    return (_jsx(Header, __assign({}, headerProps, { children: _jsxs("div", { className: styles.checkboxHeader, children: [_jsx(Checkbox, { value: checked, onChange: onChange, disabled: disabled, disableHover: true, className: styles.checkboxField }), children && _jsx("span", { children: children })] }) })));
};
CheckboxHeader.displayName = "Checkbox";
