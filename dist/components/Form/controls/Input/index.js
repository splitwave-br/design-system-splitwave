"use client";
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
import { Icon } from "../../../../components/Icon";
import styles from "./styles.module.scss";
import { forwardRef, useState } from "react";
export var InputWithRef = function (_a, ref) {
    var textPrefix = _a.textPrefix, textSuffix = _a.textSuffix, prefix = _a.prefix, suffix = _a.suffix, hasError = _a.hasError, onFocus = _a.onFocus, onBlur = _a.onBlur, wrapperStyles = _a.wrapperStyles, props = __rest(_a, ["textPrefix", "textSuffix", "prefix", "suffix", "hasError", "onFocus", "onBlur", "wrapperStyles"]);
    var _b = useState(false), isFocused = _b[0], setIsFocused = _b[1];
    var handleFocus = function (e) {
        if (onFocus)
            onFocus(e);
        setIsFocused(true);
    };
    var handleBlur = function (e) {
        if (onBlur)
            onBlur(e);
        setIsFocused(false);
    };
    var className = [
        props.className,
        styles.input,
        props.disabled ? styles.disabled : "",
        prefix ? styles.prefix : "",
        suffix ? styles.suffix : "",
        textSuffix ? styles.textSuffix : "",
        textPrefix ? styles.textPrefix : "",
    ].join(" ");
    var wrapperClassName = [
        styles.wrapper,
        textSuffix ? styles.hasTextSufix : "",
        textPrefix ? styles.hasTextPrefix : "",
        isFocused && (textPrefix || textSuffix) ? styles.isFocused : "",
        hasError ? styles.error : "",
        wrapperStyles,
    ].join(" ");
    return (_jsxs("div", { className: wrapperClassName, children: [textPrefix && _jsx("span", { className: styles.text__prefix, children: textPrefix }), prefix && _jsx(Icon, { name: prefix, size: "micro" }), _jsx("input", __assign({ ref: ref }, props, { type: props.type, placeholder: props.placeholder || "Digite", onFocus: handleFocus, onBlur: handleBlur, className: className })), suffix && _jsx(Icon, { name: suffix, size: "micro" }), textSuffix && _jsx("span", { className: styles.text__sufix, children: textSuffix })] }));
};
export var Input = forwardRef(InputWithRef);
