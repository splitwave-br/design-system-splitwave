import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useId } from "react";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../../utils/concatStyles";
import Checked from "../../../Filter/components/Checkboxes/components/Checked";
import Unchecked from "../../../Filter/components/Checkboxes/components/Unchecked";
export var Checkbox = forwardRef(function (_a, ref) {
    var label = _a.label, onChange = _a.onChange, value = _a.value, className = _a.className, disabled = _a.disabled, disableHover = _a.disableHover;
    var isChecked = value;
    var randomId = useId();
    var fieldStyles = concatStyles([
        styles.field,
        disableHover ? styles.disableHover : "",
        disabled ? styles.disabled : "",
        className,
    ]);
    return (_jsx(React.Fragment, { children: _jsx("div", { onClick: function (e) {
                if (disabled)
                    return;
                e.stopPropagation();
                onChange();
            }, children: _jsxs("label", { htmlFor: randomId, className: fieldStyles, children: [_jsxs("div", { className: concatStyles([
                            styles.inputWrapper,
                            isChecked ? styles.isChecked : "",
                        ]), children: [_jsx("input", { className: styles.checkbox, type: "checkbox", id: randomId, ref: ref, disabled: disabled, onChange: onChange, checked: isChecked }), isChecked ? _jsx(Checked, {}) : _jsx(Unchecked, {})] }), label && _jsx("span", { className: styles.label, children: label })] }) }) }, randomId));
});
Checkbox.displayName = "Checkbox";
