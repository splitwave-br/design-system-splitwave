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
// import { Icon, TIcons } from '../../../../components/Icon';
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import "./variables.scss";
import { concatStyles } from "../../../../utils/concatStyles";
import { Icon } from "../../../../components/Icon";
var OPTION_WRAPPER_CLASSES = {
    top: styles.optionsWrapperTop,
    bottom: styles.optionsWrapperBottom,
};
export function Select(_a) {
    var _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.direction, direction = _c === void 0 ? "bottom" : _c, className = _a.className, 
    // suffix,
    options = _a.options, getLabel = _a.getLabel, getValue = _a.getValue, getId = _a.getId, _d = _a.placeholder, placeholder = _d === void 0 ? "Selecione" : _d, onChange = _a.onChange, renderItem = _a.renderItem, _value = _a.value, props = __rest(_a, ["size", "direction", "className", "options", "getLabel", "getValue", "getId", "placeholder", "onChange", "renderItem", "value"]);
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(null), selectedOption = _f[0], setSelectedOption = _f[1];
    var _g = useState(_value), value = _g[0], setValue = _g[1];
    // Need to set the value when the prop changes to control the value by the parent
    useEffect(function () {
        if (_value) {
            setValue(_value);
        }
    }, [_value]);
    var handleGetValue = useCallback(function (option) {
        if (!option)
            return "";
        var value = getValue === null || getValue === void 0 ? void 0 : getValue(option);
        if (typeof value === "undefined")
            return option;
        return value;
    }, [getValue]);
    var handleSelect = function (option) {
        if (handleGetValue(option) === handleGetValue(selectedOption)) {
            onChange === null || onChange === void 0 ? void 0 : onChange("");
            setValue("");
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(option);
            setValue(handleGetValue(option));
        }
    };
    useEffect(function () {
        if (handleGetValue(selectedOption) !== value) {
            var currentOption = options.find(function (option) { return handleGetValue(option) === value; });
            setSelectedOption(currentOption);
        }
    }, [value, options, handleGetValue, selectedOption]);
    var handleOpenOptions = function (e) {
        e.stopPropagation();
        if (!props.disabled)
            setIsOpen(function (prev) { return !prev; });
    };
    var handleClickWindow = useCallback(function () {
        setIsOpen(false);
        document.removeEventListener("click", handleClickWindow);
    }, []);
    useEffect(function () {
        if (isOpen) {
            document.addEventListener("click", handleClickWindow);
        }
        else {
            document.removeEventListener("click", handleClickWindow);
        }
    }, [isOpen, handleClickWindow]);
    var isDisabled = props.disabled;
    var wrapperClass = [
        styles.wrapper,
        className ? className : "",
        isOpen ? styles["wrapper-opened"] : "",
        isDisabled && styles.disabled,
    ].join(" ");
    var selectClass = [
        styles.select,
        isDisabled && styles.disabled,
        styles["select-size-".concat(size)],
    ].join(" ");
    var selectedValueClass = [
        styles.selected_value,
        isDisabled && styles.disabled,
    ].join(" ");
    var optionWrapperClass = OPTION_WRAPPER_CLASSES[direction];
    return (_jsxs("div", { className: wrapperClass, onClick: handleOpenOptions, children: [_jsxs("div", { className: selectClass, children: [_jsx(Icon, { name: 'chevron-down', size: 2 }), selectedOption ? (_jsx("span", { className: selectedValueClass, children: getLabel(selectedOption) })) : (_jsx("span", { children: placeholder }))] }), isOpen && (_jsx("div", { className: optionWrapperClass, children: !!options.length ? (options.map(function (option) {
                    var isSelected = handleGetValue(option) === handleGetValue(selectedOption);
                    var className = concatStyles([
                        styles.option,
                        isSelected && styles.optionSelected,
                    ]);
                    var onClick = function () { return handleSelect(option); };
                    var id = getId === null || getId === void 0 ? void 0 : getId(option);
                    var value = getValue === null || getValue === void 0 ? void 0 : getValue(option);
                    var key = id ? id : value;
                    return renderItem ? (renderItem({ option: option, className: className, onClick: onClick })) : (_jsx("span", { className: className, onClick: onClick, children: getLabel(option) }, key));
                })) : (_jsx("span", { className: styles["empty-options"], children: "Nenhum item encontrado" })) }))] }));
}
