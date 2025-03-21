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
import styles from "./styles.module.scss";
import "./variables.scss";
import { useDropdown } from "../hooks/useDropdown";
var Item = function (_a) {
    var className = _a.className, _b = _a.shouldCloseOnClick, shouldCloseOnClick = _b === void 0 ? false : _b, onClick = _a.onClick, props = __rest(_a, ["className", "shouldCloseOnClick", "onClick"]);
    var setIsOpen = useDropdown().setIsOpen;
    var handleClick = function (event) {
        if (shouldCloseOnClick)
            setIsOpen(false);
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    var itemStyles = [styles.item, className].join(" ");
    return _jsx("button", __assign({ onClick: handleClick, className: itemStyles }, props));
};
export default Item;
