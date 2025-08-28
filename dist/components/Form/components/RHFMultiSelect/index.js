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
import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import { MultiSelect } from "../../controls/MultiSelect";
export var RHFMultiselect = function (_a) {
    var getLabel = _a.getLabel, getValue = _a.getValue, onChange = _a.onChange, onRemove = _a.onRemove, options = _a.options, name = _a.name, props = __rest(_a, ["getLabel", "getValue", "onChange", "onRemove", "options", "name"]);
    var _b = useFormContext(), watch = _b.watch, setValue = _b.setValue;
    var fieldSelectedValues = watch(name);
    var handleSelect = function (optionValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
        var currentValues = fieldSelectedValues !== null && fieldSelectedValues !== void 0 ? fieldSelectedValues : [];
        var isSelected = currentValues === null || currentValues === void 0 ? void 0 : currentValues.includes(optionValue);
        if (isSelected) {
            var updatedValues = currentValues.filter(function (value) { return value !== optionValue; });
            return setValue(name, updatedValues);
        }
        setValue(name, __spreadArray(__spreadArray([], currentValues, true), [optionValue], false));
    };
    var handleRemoveValue = function (optionValue) {
        onRemove === null || onRemove === void 0 ? void 0 : onRemove(optionValue);
        var updatedValues = fieldSelectedValues === null || fieldSelectedValues === void 0 ? void 0 : fieldSelectedValues.filter(function (value) { return value !== optionValue; });
        return setValue(name, updatedValues);
    };
    return (_jsx(MultiSelect, __assign({ onChange: handleSelect, getLabel: getLabel, getValue: getValue, onRemove: handleRemoveValue, options: options, value: fieldSelectedValues }, props)));
};
