"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxFilters = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const useFilter_1 = require("../../hooks/useFilter");
const useFields_1 = require("../../hooks/useFields");
const __1 = require("../..");
const Dropdown_1 = require("../../../../components/Dropdown");
const Icon_1 = require("../../../../components/Icon");
exports.CheckboxFilters = (0, react_1.forwardRef)(({ field, getLabel, getValue: getOptionValue, options }, ref) => {
    const { setFilter, getValue } = (0, useFilter_1.useFilterContext)();
    const { registerField } = (0, useFields_1.useFilterFields)();
    const selectedValues = getValue(field)?.split(",").filter(Boolean) || [];
    const handleChange = (value) => {
        const isChecked = selectedValues.includes(value);
        const newValues = isChecked
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];
        setFilter(field, newValues.filter(Boolean).join(","));
    };
    (0, react_1.useEffect)(() => {
        registerField(field);
    }, []);
    return ((0, jsx_runtime_1.jsx)(__1.Filter.Content, { spacing: "sm", hasClear: false, ref: ref, children: options.map((option, index) => {
            const optionValue = getOptionValue(option);
            const optionLabel = getLabel(option);
            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: optionValue, className: styles_module_scss_1.default.field, children: [(0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.inputWrapper, children: [(0, jsx_runtime_1.jsx)("input", { className: styles_module_scss_1.default.checkbox, type: "checkbox", id: optionValue, onChange: () => handleChange(optionValue), checked: selectedValues.includes(optionValue) }), !!selectedValues.includes(optionValue) && ((0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: "checkIcon" }))] }), (0, jsx_runtime_1.jsx)("label", { className: styles_module_scss_1.default.label, htmlFor: optionValue, children: optionLabel })] }), index !== options.length - 1 && ((0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.divider, children: (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Divider, {}) }))] }, optionValue));
        }) }));
});
exports.CheckboxFilters.displayName = "Menu";
