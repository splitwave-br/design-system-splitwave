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
import { Button } from "../../../components/Button";
import { forwardRef } from "react";
var Trigger = forwardRef(function (_a, ref) {
    var children = _a.children, isOpen = _a.isOpen, _b = _a.variant, variant = _b === void 0 ? "tertiary" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, props = __rest(_a, ["children", "isOpen", "variant", "size"]);
    if (typeof children === "function") {
        return children(props, ref);
    }
    return (_jsx(Button, __assign({ variant: variant, size: size, ref: ref }, props, { children: children })));
});
Trigger.displayName = "Trigger";
export default Trigger;
