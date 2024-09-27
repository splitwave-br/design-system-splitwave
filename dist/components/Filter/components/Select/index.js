"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Select_1 = require("../../../../components/Form/controls/Select");
const useFilter_1 = require("../../hooks/useFilter");
const Form_1 = require("../../../../components/Form");
const useFields_1 = require("../../hooks/useFields");
const react_1 = require("react");
const Select = ({ getLabel, getValue: getValueOption, getId, field, label, options, className, }) => {
    const { setFilter, getValue } = (0, useFilter_1.useFilterContext)();
    const { registerField } = (0, useFields_1.useFilterFields)();
    (0, react_1.useEffect)(() => {
        registerField(field);
    }, [field, registerField]);
    const handleChange = (option) => {
        return setFilter(field, getValueOption(option));
    };
    return ((0, jsx_runtime_1.jsxs)(Form_1.Form.Field, { className: className, children: [label && (0, jsx_runtime_1.jsx)(Form_1.Form.Label, { children: label }), (0, jsx_runtime_1.jsx)(Select_1.Select, { autoFocus: true, onChange: handleChange, options: options, getLabel: getLabel, getValue: getValueOption, getId: getId, value: getValue(field) || "" })] }));
};
exports.Select = Select;
