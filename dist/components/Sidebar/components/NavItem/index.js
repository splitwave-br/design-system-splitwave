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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../../../../components/Icon';
import styles from './styles.module.scss';
import classnames from 'classnames';
import './variables.scss';
export var NavItem = function (_a) {
    var _b;
    var route = _a.route, isActive = _a.isActive, onClick = _a.onClick, disabled = _a.disabled, renderWrapper = _a.renderWrapper;
    var className = classnames(styles.wrapper, (_b = {},
        _b[styles.active] = isActive,
        _b[styles.noIcon] = !route.icon,
        _b[styles.disabled] = disabled,
        _b));
    var props = {
        href: disabled ? '#' : route.path,
        className: className,
        onClick: onClick,
        children: (_jsxs(_Fragment, { children: [route.icon ? (_jsx(Icon, { name: route.icon, size: 1, className: styles.icon })) : (_jsx("div", { className: styles.dot })), route.name] })),
    };
    if (renderWrapper) {
        return renderWrapper(props);
    }
    return _jsx("a", __assign({}, props));
};
