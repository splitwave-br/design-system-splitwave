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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { SelectMenu } from "./components/Menu";
import { useFloatingElement } from "../../../../hooks/useFloatingElement/hooks";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { concatStyles } from "../../../../utils/concatStyles";
import { SelectTrigger } from "./components/Trigger";
import { SelectedValue } from "./components/SelectedValue";
export var Select = function (_a) {
    var _b = _a.asPortal, asPortal = _b === void 0 ? false : _b, name = _a.name, options = _a.options, prefix = _a.prefix, _c = _a.placeholder, placeholder = _c === void 0 ? "Selecione" : _c, exceptionRef = _a.exceptionRef, _d = _a.enableDeselect, enableDeselect = _d === void 0 ? true : _d, _e = _a.searchable, searchable = _e === void 0 ? false : _e, value = _a.value, disabled = _a.disabled, className = _a.className, triggerClassname = _a.triggerClassname, menuContainerClassname = _a.menuContainerClassname, menuInnerClassname = _a.menuInnerClassname, keyExtractor = _a.keyExtractor, getValue = _a.getValue, onChange = _a.onChange, getLabel = _a.getLabel, renderItem = _a.renderItem, props = __rest(_a, ["asPortal", "name", "options", "prefix", "placeholder", "exceptionRef", "enableDeselect", "searchable", "value", "disabled", "className", "triggerClassname", "menuContainerClassname", "menuInnerClassname", "keyExtractor", "getValue", "onChange", "getLabel", "renderItem"]);
    var containerRef = useRef(null);
    var menuRef = useRef(null);
    var _f = useState(false), isOpen = _f[0], setIsOpen = _f[1];
    var _g = useState(null), selectedOption = _g[0], setSelectedOption = _g[1];
    var _h = useState(""), searchValue = _h[0], setSearchValue = _h[1];
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
        if (!searchable)
            return options;
        return options.filter(function (option) {
            return getLabel(option)
                .toString()
                .toLowerCase()
                .includes(searchValue.toLowerCase());
        });
    }, [searchValue, options, getLabel]);
    var handleSelect = useCallback(function (option) {
        var selectedOptionValue = selectedOption && getValue(selectedOption);
        var optionValue = getValue(option);
        var isSelectedOption = optionValue === selectedOptionValue;
        if (isSelectedOption) {
            if (!enableDeselect)
                return;
            setSelectedOption(null);
            onChange === null || onChange === void 0 ? void 0 : onChange(undefined);
            setIsOpen(false);
            return;
        }
        setSelectedOption(option);
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
        setSearchValue("");
        setIsOpen(false);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enableDeselect, selectedOption]);
    var handleFirstRender = useCallback(function () {
        if (value === null || value === undefined) {
            setSelectedOption(null);
            return;
        }
        var currentSelectedOption = options.find(function (option) { return getValue(option) === value; });
        if (currentSelectedOption) {
            setSelectedOption(currentSelectedOption);
        }
    }, [options, value, getValue]);
    useEffect(function () {
        handleFirstRender();
    }, [handleFirstRender]);
    var handleOpenOptions = function () {
        if (disabled)
            return;
        setIsOpen(function (prev) { return !prev; });
    };
    var containerStyles = concatStyles([styles.container, className]);
    var selectedOptionLabel = selectedOption
        ? getLabel(selectedOption)
        : undefined;
    return (_jsxs("div", { ref: containerRef, className: containerStyles, onClick: handleOpenOptions, children: [_jsx(SelectTrigger, { prefix: prefix, disabled: disabled, selectedLabel: selectedOptionLabel, shouldRenderSearch: isOpen && searchable, searchValue: searchValue, onSearchChange: setSearchValue, children: _jsx(SelectedValue, { placeholder: placeholder, selectedOptionLabel: selectedOptionLabel, disabled: disabled }) }), isOpen && (_jsx(SelectMenu, __assign({ ref: menuRef, options: filteredOptions, onChange: handleSelect, getLabel: getLabel, getValue: getValue, keyExtractor: keyExtractor, handleGetIsSelected: function (option) { return option === selectedOption; }, animationDirection: animationDirection, asPortal: asPortal, disabled: disabled }, props)))] }));
};
