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
import { useMemo } from "react";
// import { Icon, TIcons } from '../../../../components/Icon';
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../../utils/concatStyles";
import { Badge } from "../../../../components/Badge";
import { Icon } from "../../../../components/Icon";
import Unchecked from "../../../../components/Filter/components/Checkboxes/components/Unchecked";
import Checked from "../../../../components/Filter/components/Checkboxes/components/Checked";
var OPTION_WRAPPER_CLASSES = {
    top: styles.optionsWrapperTop,
    bottom: styles.optionsWrapperBottom,
};
export function MultiSelect(_a) {
    var _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.direction, direction = _c === void 0 ? "bottom" : _c, className = _a.className, 
    // suffix,
    options = _a.options, getLabel = _a.getLabel, getValue = _a.getValue, getId = _a.getId, _d = _a.placeholder, placeholder = _d === void 0 ? "Selecione" : _d, onChange = _a.onChange, renderItem = _a.renderItem, _value = _a.value, props = __rest(_a, ["size", "direction", "className", "options", "getLabel", "getValue", "getId", "placeholder", "onChange", "renderItem", "value"]);
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(""), searchValue = _f[0], setSearchValue = _f[1];
    // const [selectedOption, setSelectedOption] = useState<any>(null);
    var _g = useState(_value || []), value = _g[0], setValue = _g[1];
    var filteredOptions = useMemo(function () {
        return options.filter(function (option) {
            return getLabel(option).toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [searchValue, options, getLabel]);
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
        var currentValue = value || [];
        var isExist = currentValue.find(function (opt) { return handleGetValue(opt) === handleGetValue(option); });
        if (isExist) {
            var newValue = currentValue.filter(function (opt) { return handleGetValue(opt) !== handleGetValue(option); });
            setValue(newValue);
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
            return;
        }
        else {
            setValue(__spreadArray(__spreadArray([], currentValue, true), [option], false));
            onChange === null || onChange === void 0 ? void 0 : onChange(__spreadArray(__spreadArray([], currentValue, true), [option], false));
        }
    };
    // useEffect(() => {
    //   if (handleGetValue(selectedOption) !== value) {
    //     const currentOption = options.find(
    //       (option) => handleGetValue(option) === value,
    //     );
    //     setSelectedOption(currentOption);
    //   }
    // }, [value, options, handleGetValue, selectedOption]);
    var handleOpenOptions = function (e) {
        e.stopPropagation();
        if (!props.disabled)
            setIsOpen(function (prev) { return !prev; });
    };
    // useClickOutside()
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
    var renderValueLabel = useMemo(function () {
        var valueLabel = [];
        // const selectedOptionLabel = value ? getLabel(value) : ''
        if (value) {
            value === null || value === void 0 ? void 0 : value.forEach(function (option) {
                var optionLabel = getLabel(option);
                if (optionLabel && optionLabel.length > 24)
                    optionLabel = optionLabel.slice(0, 24) + "...";
                valueLabel.push(_jsxs(Badge, { onClick: function (e) {
                        e.stopPropagation();
                        handleSelect(option);
                    }, children: [optionLabel, _jsx(Icon, { name: "x", size: 1 })] }, "value-".concat(getValue(option))));
            });
        }
        if (isOpen) {
            valueLabel.push(_jsx("input", { className: styles.inputSearch, autoFocus: true, onChange: function (e) {
                    setSearchValue(e.target.value);
                } }));
        }
        if (valueLabel.length)
            return valueLabel.map(function (v) { return v; });
        return _jsx("span", { children: placeholder });
    }, [value, placeholder, getLabel, getId, handleSelect, isOpen]);
    var handleClickClear = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange([]);
        setValue([]);
    };
    return (_jsxs("div", { className: wrapperClass, onClick: handleOpenOptions, children: [_jsx("div", { className: selectClass, children: renderValueLabel }), isOpen && (_jsxs("div", { className: styles.optionsWrapper, children: [!!filteredOptions.length ? (filteredOptions === null || filteredOptions === void 0 ? void 0 : filteredOptions.map(function (option) {
                        var isSelected = value === null || value === void 0 ? void 0 : value.find(function (opt) { return getValue(option) === getValue(opt); });
                        return (_jsxs("span", { className: concatStyles([
                                styles.option,
                                isSelected && styles.optionSelected,
                            ]), onClick: function (e) {
                                e.stopPropagation();
                                handleSelect(option);
                            }, children: [isSelected ? _jsx(Checked, {}) : _jsx(Unchecked, {}), getLabel(option)] }, getValue(option)));
                    })) : (_jsx("span", { className: styles["empty-options"], children: "Nenhum item encontrado" })), !!(value === null || value === void 0 ? void 0 : value.length) && (_jsx("span", { onClick: handleClickClear, className: styles.cleanButton, children: "Limpar" }))] }))] }));
}
