"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select as SelectControl } from "../../../../components/Form/controls/Select";
import { useFilterContext } from "../../hooks/useFilter";
import { Form } from "../../../../components/Form";
import { useFilterFields } from "../../hooks/useFields";
import { useEffect } from "react";
export var Select = function (_a) {
    var getLabel = _a.getLabel, getValueOption = _a.getValue, getId = _a.getId, field = _a.field, label = _a.label, options = _a.options, className = _a.className;
    var _b = useFilterContext(), setFilter = _b.setFilter, getValue = _b.getValue;
    var registerField = useFilterFields().registerField;
    useEffect(function () {
        registerField(field);
    }, [field, registerField]);
    var handleChange = function (option) {
        return setFilter(field, getValueOption(option));
    };
    return (_jsxs(Form.Field, { className: className, children: [label && _jsx(Form.Label, { children: label }), _jsx(SelectControl, { autoFocus: true, onChange: handleChange, options: options, getLabel: getLabel, getValue: getValueOption, getId: getId, value: getValue(field) || "" })] }));
};
