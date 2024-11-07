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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './styles.module.scss';
import variants from './variants.module.scss';
export var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'large' : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d, disabled = _a.disabled, loading = _a.loading, className = _a.className, props = __rest(_a, ["children", "variant", "size", "type", "disabled", "loading", "className"]);
    return (_jsxs(_Fragment, { children: [loading && _jsx("div", { className: styles.loading_overlay, children: " " }), _jsx("button", __assign({ type: type, disabled: loading || disabled, className: [
                    styles.button,
                    styles["size__".concat(size)],
                    variants["variant__".concat(variant)],
                    className ? className : '',
                    loading ? variants.loading : '',
                ].join(' ') }, props, { children: children }))] }));
};
