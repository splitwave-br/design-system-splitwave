"use client";
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
import styles from "./styles.module.scss";
import { Icon } from "../../../../components/Icon";
import { DatePicker } from "../../../../components/DatePicker";
import { Button } from "../../../../components/Button";
import { Form } from "../../../../components/Form";
import { useDateFilter } from "./hooks/useDateFilter";
import { useRef } from "react";
export var DateFilter = function (_a) {
    var isPeriod = _a.isPeriod, formatter = _a.formatter, label = _a.label, _b = _a.disabled, disabled = _b === void 0 ? {
        after: new Date(),
    } : _b, props = __rest(_a, ["isPeriod", "formatter", "label", "disabled"]);
    var _c = useDateFilter(props, isPeriod), isOpen = _c.isOpen, handleToggle = _c.handleToggle, handlePickDate = _c.handlePickDate, buttonLabel = _c.buttonLabel;
    var fieldRef = useRef(null);
    var isDisabledFilter = typeof disabled === "boolean";
    return (_jsx("div", { ref: fieldRef, className: styles.container, children: _jsxs(Form.Field, { children: [label && _jsx(Form.Label, { children: label }), _jsxs(Button, { className: styles.datePickerTrigger, variant: "tertiary", onClick: handleToggle, disabled: isDisabledFilter && disabled, children: [_jsx(Icon, { name: "calendar", size: 1 }), buttonLabel] }), _jsx(DatePicker, { disabled: disabled, formatter: formatter, parentRef: fieldRef, mode: isPeriod ? "range" : "single", isOpen: isOpen, handlePickDate: handlePickDate, handleToggle: handleToggle })] }) }));
};
DateFilter.displayName = "DateFilter";
