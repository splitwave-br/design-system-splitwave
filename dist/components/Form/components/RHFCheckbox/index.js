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
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from "../../controls/Checkbox";
import { useFormContext } from "react-hook-form";
export function RHFCheckbox(_a) {
    var name = _a.name, onCheck = _a.onCheck, props = __rest(_a, ["name", "onCheck"]);
    var _b = useFormContext(), watch = _b.watch, getValues = _b.getValues, setValue = _b.setValue;
    var isChecked = watch(name);
    var handleCheck = function () {
        var updatedValue = !getValues(name);
        setValue(name, updatedValue, {
            shouldValidate: true,
        });
        onCheck === null || onCheck === void 0 ? void 0 : onCheck(updatedValue);
    };
    return _jsx(Checkbox, __assign({ onChange: handleCheck, value: isChecked }, props));
}
