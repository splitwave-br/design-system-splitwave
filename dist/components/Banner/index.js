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
import classnames from "classnames";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import "./variables.scss";
export var Banner = function (_a) {
    var _b;
    var children = _a.children, _c = _a.variant, variant = _c === void 0 ? "informative" : _c, props = __rest(_a, ["children", "variant"]);
    return (_jsx("div", __assign({}, props, { className: classnames(styles.wrapper, (_b = {},
            _b[variants[variant]] = variant,
            _b)), children: children })));
};
