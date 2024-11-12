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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "../../../../utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";
export var Content = forwardRef(function (_a, ref) {
    var _b = _a.hasClear, hasClear = _b === void 0 ? true : _b, _c = _a.spacing, spacing = _c === void 0 ? "default" : _c, children = _a.children, _d = _a.shouldCloseOnClick, shouldCloseOnClick = _d === void 0 ? false : _d, className = _a.className, onClose = _a.onClose, 
    // isEjected,
    props = __rest(_a, ["hasClear", "spacing", "children", "shouldCloseOnClick", "className", "onClose"]);
    var clean = useFilterContext().clean;
    var fields = useFilterFields().fields;
    var contentStyles = concatStyles([
        styles.content,
        styles["spacing__".concat(spacing)],
        // isEjected ? styles.contentEjected : "",
        className,
    ]);
    return (_jsxs("div", __assign({ ref: ref, onClick: function (e) {
            shouldCloseOnClick ? onClose === null || onClose === void 0 ? void 0 : onClose() : e.stopPropagation();
        }, onKeyDown: function (e) {
            if (e.key === "Escape" || e.key === "Enter") {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }, className: contentStyles }, props, { children: [children, hasClear && (_jsx("span", { onClick: function () {
                    clean(fields);
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                }, className: concatStyles([
                    styles.clean,
                    // isEjected ? styles.cleanEjected : "",
                ]), children: "Limpar" }))] })));
});
Content.displayName = "Menu";
