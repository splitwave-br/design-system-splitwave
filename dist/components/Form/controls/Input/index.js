"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.InputWithRef = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = require("../../../../components/Icon");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const react_1 = require("react");
const InputWithRef = ({ textPrefix, textSuffix, prefix, suffix, hasError, onFocus, onBlur, wrapperStyles, ...props }, ref) => {
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const handleFocus = (e) => {
        if (onFocus)
            onFocus(e);
        setIsFocused(true);
    };
    const handleBlur = (e) => {
        if (onBlur)
            onBlur(e);
        setIsFocused(false);
    };
    const className = [
        props.className,
        styles_module_scss_1.default.input,
        props.disabled ? styles_module_scss_1.default.disabled : "",
        prefix ? styles_module_scss_1.default.prefix : "",
        suffix ? styles_module_scss_1.default.suffix : "",
        textSuffix ? styles_module_scss_1.default.textSuffix : "",
        textPrefix ? styles_module_scss_1.default.textPrefix : "",
    ].join(" ");
    const wrapperClassName = [
        styles_module_scss_1.default.wrapper,
        textSuffix ? styles_module_scss_1.default.hasTextSufix : "",
        textPrefix ? styles_module_scss_1.default.hasTextPrefix : "",
        isFocused && (textPrefix || textSuffix) ? styles_module_scss_1.default.isFocused : "",
        hasError ? styles_module_scss_1.default.error : "",
        wrapperStyles,
    ].join(" ");
    return ((0, jsx_runtime_1.jsxs)("div", { className: wrapperClassName, children: [textPrefix && (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.text__prefix, children: textPrefix }), prefix && (0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: prefix, size: "micro" }), (0, jsx_runtime_1.jsx)("input", { ref: ref, ...props, type: props.type, placeholder: props.placeholder || "Digite", onFocus: handleFocus, onBlur: handleBlur, className: className }), suffix && (0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: suffix, size: "micro" }), textSuffix && (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.text__sufix, children: textSuffix })] }));
};
exports.InputWithRef = InputWithRef;
exports.Input = (0, react_1.forwardRef)(exports.InputWithRef);
