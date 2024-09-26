"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Input_1 = require("../../../../components/Form/controls/Input");
const useFilter_1 = require("../../hooks/useFilter");
const react_1 = require("react");
const Form_1 = require("../../../../components/Form");
const useFields_1 = require("../../hooks/useFields");
const Field = ({ field, label, mask }) => {
    const { setFilter, getValue } = (0, useFilter_1.useFilterContext)();
    const { registerField } = (0, useFields_1.useFilterFields)();
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        registerField(field);
    }, [field, registerField]);
    (0, react_1.useEffect)(() => {
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    }, []);
    const handleChange = (e) => {
        if (mask)
            return setFilter(field, mask(e.target.value));
        return setFilter(field, e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)(Form_1.Form.Field, { children: [label && (0, jsx_runtime_1.jsx)(Form_1.Form.Label, { children: label }), (0, jsx_runtime_1.jsx)(Input_1.Input, { ref: inputRef, onChange: handleChange, value: getValue(field) || "" })] }));
};
exports.Field = Field;
