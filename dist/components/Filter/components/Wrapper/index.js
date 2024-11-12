"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { FilterProvider } from "../../hooks/useFilter";
export var Wrapper = function (_a) {
    var children = _a.children, register = _a.register;
    return _jsx(FilterProvider, { register: register, children: children });
};
