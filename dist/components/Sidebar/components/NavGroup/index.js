import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import itemStyles from "../NavItem/styles.module.scss";
import '../NavItem/variables.scss';
import classnames from "classnames";
import { useAnimatedStyles } from "./hooks/useAnimatedStyles";
import { NavItem } from "../NavItem";
import { Icon } from "../../../../components/Icon";
export var NavGroup = function (_a) {
    var _b, _c;
    var _d;
    var route = _a.route, isOpened = _a.isOpened, disabled = _a.disabled, onClickItem = _a.onClickItem, onClick = _a.onClick, getIsRouteActive = _a.getIsRouteActive, getShouldShowRoute = _a.getShouldShowRoute;
    var animatedStyles = useAnimatedStyles({
        routes: route.children,
        isOpened: isOpened,
    }).animatedStyles;
    var isGroupActive = function () { var _a; return (_a = route === null || route === void 0 ? void 0 : route.children) === null || _a === void 0 ? void 0 : _a.some(function (child) { return getIsRouteActive(child.path); }); };
    return (_jsxs("div", { className: styles.wrapper, children: [_jsxs("div", { onClick: onClick, className: classnames(itemStyles.wrapper, (_b = {},
                    _b[itemStyles.active] = isGroupActive,
                    _b[itemStyles.disabled] = disabled,
                    _b)), children: [_jsxs("div", { className: styles.routeWrapper, children: [(route === null || route === void 0 ? void 0 : route.icon) ? (_jsx(Icon, { name: route === null || route === void 0 ? void 0 : route.icon, size: 1, className: itemStyles.icon })) : null, route.name] }), _jsx(Icon, { name: "chevron-down", size: 1, className: styles.iconDropdown })] }), _jsx("div", { className: classnames(styles.wrapperItems, (_c = {},
                    _c[styles.wrapperItems__opened] = isOpened,
                    _c)), style: animatedStyles, children: (_d = route === null || route === void 0 ? void 0 : route.children) === null || _d === void 0 ? void 0 : _d.map(function (route) {
                    var isActive = getIsRouteActive(route.path);
                    var canShow = !route.shouldHide && getShouldShowRoute ? getShouldShowRoute(route) : true;
                    if (!canShow)
                        return false;
                    return (_jsx(NavItem, { isActive: isActive, route: route, onClick: onClickItem }, route.name));
                }) })] }));
};
