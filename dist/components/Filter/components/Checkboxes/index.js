"use client";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { useFilterFields } from "../../hooks/useFields";
import { Filter } from "../..";
import { Dropdown } from "../../../../components/Dropdown";
import { concatStyles } from "../../../../utils/concatStyles";
import Checked from "./components/Checked";
import Unchecked from "./components/Unchecked";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Form } from "../../../../components/Form";
import { MultiSelect as MultiSelectControl } from "../../../../components/Form/controls/MultiSelect";
export var CheckboxFilters = forwardRef(function (_a, ref) {
    var _b;
    var field = _a.field, label = _a.label, _c = _a.hasClear, hasClear = _c === void 0 ? false : _c, getLabel = _a.getLabel, getOptionValue = _a.getValue, options = _a.options, isEjected = _a.isEjected, className = _a.className;
    var isMobile = useWindowSize().isMobile;
    var _d = useFilterContext(), setFilter = _d.setFilter, getValue = _d.getValue;
    var registerField = useFilterFields().registerField;
    var selectedValues = ((_b = getValue(field)) === null || _b === void 0 ? void 0 : _b.split(",").filter(Boolean)) || [];
    var handleChange = function (value) {
        var isChecked = selectedValues.includes(value);
        var newValues = isChecked
            ? selectedValues.filter(function (v) { return v !== value; })
            : __spreadArray(__spreadArray([], selectedValues, true), [value], false);
        setFilter(field, newValues.filter(Boolean).join(","));
    };
    var handleChangeMobile = function (value) {
        var newValues = value.map(getOptionValue);
        setFilter(field, newValues.filter(Boolean).join(","));
    };
    useEffect(function () {
        registerField(field);
    }, []);
    if (isMobile && isEjected) {
        return (_jsx(Filter.Content, { className: concatStyles([styles.wrapper, className]), isEjected: true, children: _jsxs(Form.Field, { children: [label && _jsx(Form.Label, { children: label }), _jsx(MultiSelectControl, { autoFocus: true, onChange: handleChangeMobile, options: options, getLabel: getLabel, getValue: getOptionValue, getId: getOptionValue, value: options.filter(function (opt) {
                            return selectedValues.includes(getOptionValue(opt));
                        }) || [] })] }) }));
    }
    return (_jsx(Dropdown.Menu, { className: styles.wrapper, ref: ref, children: options.map(function (option, index) {
            var isLastItem = index === options.length - 1;
            var shouldShowDivider = hasClear && isLastItem;
            var optionValue = getOptionValue(option);
            var optionLabel = getLabel(option);
            var isChecked = selectedValues.includes(optionValue);
            return (_jsxs(React.Fragment, { children: [_jsxs("label", { htmlFor: optionValue, className: styles.field, children: [_jsxs("div", { className: concatStyles([
                                    styles.inputWrapper,
                                    isChecked ? styles.isChecked : "",
                                ]), children: [_jsx("input", { className: styles.checkbox, type: "checkbox", id: optionValue, onChange: function () { return handleChange(optionValue); }, checked: selectedValues.includes(optionValue) }), isChecked ? _jsx(Checked, {}) : _jsx(Unchecked, {})] }), _jsx("label", { className: styles.label, htmlFor: optionValue, children: optionLabel })] }), shouldShowDivider && (_jsx("div", { className: styles.divider, children: _jsx(Dropdown.Divider, {}) }))] }, optionValue));
        }) }));
});
CheckboxFilters.displayName = "Menu";
