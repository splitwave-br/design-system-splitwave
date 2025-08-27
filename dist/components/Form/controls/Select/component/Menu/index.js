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
import { concatStyles } from "../../../../../../utils/concatStyles";
import floatingStyles from "@/hooks/useFloatingElement/styles/styles.module.scss";
import "../../../../../Dropdown/Item/variables.scss";
import styles from "./styles.module.scss";
import { createPortal } from "react-dom";
import { MenuItem } from "../MenuItem";
var BaseSelectMenu = function (_a, ref) {
    var handleGetIsSelected = _a.handleGetIsSelected, onChange = _a.onChange, renderItem = _a.renderItem, getValue = _a.getValue, getLabel = _a.getLabel, options = _a.options, _b = _a.asPortal, asPortal = _b === void 0 ? false : _b, menuContainerClassname = _a.menuContainerClassname, menuInnerClassname = _a.menuInnerClassname, animationDirection = _a.animationDirection, children = _a.children, props = __rest(_a, ["handleGetIsSelected", "onChange", "renderItem", "getValue", "getLabel", "options", "asPortal", "menuContainerClassname", "menuInnerClassname", "animationDirection", "children"]);
    var menuStyles = concatStyles([
        styles.menu,
        floatingStyles["animateFrom".concat(animationDirection)],
        menuContainerClassname,
    ]);
    var innerContainerStyles = concatStyles([
        styles.menuInner,
        menuInnerClassname,
    ]);
    var content = (_jsx("div", __assign({ ref: ref, className: menuStyles }, props, { children: _jsxs("div", { className: innerContainerStyles, children: [options.length ? (options.map(function (option) {
                    var isSelected = handleGetIsSelected(option);
                    var optionValue = getValue(option);
                    var onClick = function () { return onChange(option); };
                    if (renderItem)
                        return renderItem({
                            option: option,
                            isSelected: isSelected,
                            onClick: onClick,
                        });
                    return (_jsx(MenuItem, { isSelected: isSelected, onClick: onClick, children: _jsx("span", { children: getLabel(option) }) }, optionValue));
                })) : (_jsx(MenuItem, { isSelected: false, className: styles.option__empty, children: "Nenhum item encontrado" })), children] }) })));
    return asPortal ? createPortal(content, document.body) : content;
};
export var SelectMenu = forwardRef(BaseSelectMenu);
