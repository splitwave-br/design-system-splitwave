"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Icon_1 = require("../../../../components/Icon");
const DatePicker_1 = require("../../../../components/DatePicker");
const Button_1 = require("../../../../components/Button");
const Form_1 = require("../../../../components/Form");
const useDateFilter_1 = require("./hooks/useDateFilter");
const react_1 = require("react");
const useClickOutside_1 = __importDefault(require("../../../../hooks/useClickOutside"));
const DateFilter = ({ isPeriod, formatter, label, ...props }) => {
    const { isOpen, handleToggle, handlePickDate, buttonLabel } = (0, useDateFilter_1.useDateFilter)(props, isPeriod);
    const fieldRef = (0, react_1.useRef)(null);
    (0, useClickOutside_1.default)({
        callback: handleToggle,
        isActive: isOpen,
        ref: fieldRef,
    });
    return ((0, jsx_runtime_1.jsx)("div", { ref: fieldRef, className: styles_module_scss_1.default.container, children: (0, jsx_runtime_1.jsxs)(Form_1.Form.Field, { children: [label && (0, jsx_runtime_1.jsx)(Form_1.Form.Label, { children: label }), (0, jsx_runtime_1.jsxs)(Button_1.Button, { className: styles_module_scss_1.default.datePickerTrigger, variant: "outline", onClick: handleToggle, children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: "calendar", size: 1 }), buttonLabel] }), (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { formatter: formatter, parentRef: fieldRef, mode: isPeriod ? "range" : "single", isOpen: isOpen, handlePickDate: handlePickDate, handleToggle: handleToggle })] }) }));
};
exports.DateFilter = DateFilter;
