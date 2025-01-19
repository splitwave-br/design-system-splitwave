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
import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "../../../../utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";
import { Icon } from "../../../../components/Icon";
export var Button = forwardRef(function (_a, ref) {
    var IconCustom = _a.icon, children = _a.children, isOpen = _a.isOpen, fields = _a.fields, props = __rest(_a, ["icon", "children", "isOpen", "fields"]);
    var getIsActive = useFilterContext().getIsActive;
    var registeredFields = useFilterFields().fields;
    return (_jsxs("button", __assign({}, props, { ref: ref, className: concatStyles([
            styles.button,
            getIsActive(__spreadArray(__spreadArray([], (fields || []), true), registeredFields, true))
                ? styles.active
                : "",
        ]), children: [children, IconCustom ? _jsx(IconCustom, {}) : _jsx(Icon, { name: "chevron-down", size: 1 })] })));
});
Button.displayName = "Trigger";
