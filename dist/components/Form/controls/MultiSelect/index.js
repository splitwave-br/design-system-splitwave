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
import { useMemo, useRef } from "react";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../../utils/concatStyles";
import Unchecked from "../../../../components/Filter/components/Checkboxes/components/Unchecked";
import Checked from "../../../../components/Filter/components/Checkboxes/components/Checked";
import { SelectTrigger } from "../Select/components/Trigger";
import { SelectedValues } from "./components/SelectedValues";
import { SelectMenu } from "../Select/components/Menu";
import { useFloatingElement } from "../../../../hooks/useFloatingElement/hooks";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { MenuItem } from "../Select/components/MenuItem";
export function MultiSelect(_a) {
    var getLabel = _a.getLabel, getValue = _a.getValue, onChange = _a.onChange, renderItem = _a.renderItem, onRemove = _a.onRemove, _b = _a.size, size = _b === void 0 ? 2 : _b, className = _a.className, options = _a.options, _c = _a.placeholder, placeholder = _c === void 0 ? "Selecione" : _c, _d = _a.disableDeselect, disableDeselect = _d === void 0 ? false : _d, disabled = _a.disabled, _e = _a.hasClear, hasClear = _e === void 0 ? true : _e, _f = _a.asPortal, asPortal = _f === void 0 ? false : _f, value = _a.value, props = __rest(_a, ["getLabel", "getValue", "onChange", "renderItem", "onRemove", "size", "className", "options", "placeholder", "disableDeselect", "disabled", "hasClear", "asPortal", "value"]);
    var containerRef = useRef(null);
    var menuRef = useRef(null);
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = useState(""), searchValue = _h[0], setSearchValue = _h[1];
    var _j = useState([]), selectedOptions = _j[0], setSelectedOptions = _j[1];
    var animationDirection = useFloatingElement({
        triggerRef: containerRef,
        elementRef: menuRef,
        isEnabled: isOpen,
        asPortal: asPortal,
    }).animationDirection;
    useClickOutside({
        callback: function () { return setIsOpen(false); },
        isActive: isOpen,
        ref: containerRef,
        exceptionRef: menuRef,
    });
    var filteredOptions = useMemo(function () {
        return options.filter(function (option) {
            return getLabel(option).toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [searchValue, options, getLabel]);
    var handleGetValue = useCallback(function (option) {
        if (!option)
            return "";
        var value = getValue === null || getValue === void 0 ? void 0 : getValue(option);
        if (typeof value === "undefined")
            return option;
        return value;
    }, [getValue]);
    var handleRemoveItem = function (option) {
        var currentSelectedOptions = selectedOptions || [];
        var optionValue = handleGetValue(option);
        var newValue = currentSelectedOptions.filter(function (opt) { return handleGetValue(opt) !== handleGetValue(option); });
        setSelectedOptions(newValue);
        return onRemove === null || onRemove === void 0 ? void 0 : onRemove(optionValue);
    };
    var handleSelect = function (option) {
        var currentSelectedOptions = selectedOptions || [];
        var optionValue = handleGetValue(option);
        var hasBeenAdded = currentSelectedOptions.find(function (option) { return handleGetValue(option) === optionValue; });
        if (hasBeenAdded && !disableDeselect) {
            return handleRemoveItem(option);
        }
        setSelectedOptions(__spreadArray(__spreadArray([], currentSelectedOptions, true), [option], false));
        onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
    };
    var handleGetIsSelected = useCallback(function (option) { return selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.includes(option); }, [selectedOptions]);
    var handleClickClear = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange([]);
        setSelectedOptions([]);
    };
    var handleFirstRender = useCallback(function () {
        if (value === null || value === undefined)
            return;
        var matchedOptions = options === null || options === void 0 ? void 0 : options.filter(function (option) {
            return value.some(function (selectedOption) { return getValue(option) === selectedOption; });
        });
        if (!matchedOptions || matchedOptions === selectedOptions)
            return;
        setSelectedOptions(matchedOptions);
    }, [value, options, getValue]);
    useEffect(handleFirstRender, [handleFirstRender]);
    var handleToggleOptions = function (e) {
        e.stopPropagation();
        if (disabled)
            return;
        setIsOpen(function (prev) { return !prev; });
    };
    var wrapperClass = concatStyles([styles.wrapper, className]);
    var shouldRenderClearButton = hasClear && selectedOptions.length > 0;
    return (_jsxs("div", { ref: containerRef, className: wrapperClass, onClick: handleToggleOptions, children: [_jsx(SelectTrigger, { triggerClassname: selectedOptions.length > 0 ? styles.trigger : "", disabled: disabled, shouldRenderSearch: false, searchValue: searchValue, onSearchChange: setSearchValue, children: _jsx(SelectedValues, { getLabel: getLabel, onRemove: handleRemoveItem, placeholder: placeholder, selectedOptions: selectedOptions, disabled: disabled }) }), isOpen && (_jsx(SelectMenu, __assign({ ref: menuRef, options: filteredOptions, onChange: handleSelect, getLabel: getLabel, getValue: getValue, handleGetIsSelected: handleGetIsSelected, animationDirection: animationDirection, asPortal: asPortal, disabled: disabled, renderItem: function (_a) {
                    var option = _a.option, isSelected = _a.isSelected, onClick = _a.onClick;
                    if (renderItem)
                        return renderItem({ option: option, isSelected: isSelected, onClick: onClick });
                    return (_jsxs(MenuItem, { isSelected: isSelected, onClick: onClick, children: [isSelected ? _jsx(Checked, {}) : _jsx(Unchecked, {}), getLabel(option)] }, getValue(option)));
                } }, props, { children: shouldRenderClearButton && (_jsx("span", { onClick: handleClickClear, className: styles.cleanButton, children: "Limpar" })) })))] }));
}
