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
import { createContext, useContext } from "react";
var DropdownContext = createContext({});
function DropdownProvider(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsx(DropdownContext.Provider, { value: __assign({}, props), children: children }));
}
function useDropdown() {
    var context = useContext(DropdownContext);
    if (context === undefined) {
        throw new Error("useDropdown must be used within a DropdownContextProvider");
    }
    return context;
}
export { DropdownProvider, useDropdown };
