'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import '../../variables.scss';
var BASE_Z_INDEX = 1050;
function DrawerPortalEntry(_a) {
    var _b, _c, _d;
    var entry = _a.entry, index = _a.index, totalCount = _a.totalCount, onClose = _a.onClose;
    var _e = useState(false), visible = _e[0], setVisible = _e[1];
    var depth = totalCount - 1 - index;
    var isTop = depth === 0;
    useEffect(function () {
        var raf = requestAnimationFrame(function () { return setVisible(true); });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    var dataState = !visible || entry.state === 'closing' ? 'hidden' : 'visible';
    var handleOverlayClick = function () {
        var _a;
        if (isTop && ((_a = entry.options) === null || _a === void 0 ? void 0 : _a.closeOnOverlayClick) !== false) {
            onClose();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: styles.overlay, "data-state": dataState, "data-clickable": String(isTop && ((_b = entry.options) === null || _b === void 0 ? void 0 : _b.closeOnOverlayClick) !== false), style: { zIndex: BASE_Z_INDEX + index * 10 }, onMouseDown: handleOverlayClick }), _jsx("div", { className: styles.drawerWrapper, "data-state": dataState, "data-size": (_d = (_c = entry.options) === null || _c === void 0 ? void 0 : _c.size) !== null && _d !== void 0 ? _d : 'md', style: {
                    zIndex: BASE_Z_INDEX + index * 10 + 1,
                    '--drawer-depth': depth,
                }, onClick: function (e) { return e.stopPropagation(); }, children: entry.component })] }));
}
export default DrawerPortalEntry;
