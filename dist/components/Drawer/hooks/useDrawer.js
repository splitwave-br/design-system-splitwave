'use client';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from 'react';
import useAdjustScrollbar from '../../../hooks/useAdjustScrollbar';
import DrawerPortalEntry from '../components/Entry';
var DrawerContext = createContext({});
var drawerId = 0;
var ANIMATION_DURATION = 300;
function DrawerProvider(_a) {
    var children = _a.children;
    var _b = useState([]), queue = _b[0], setQueue = _b[1];
    var handleRemoveScrollbar = useAdjustScrollbar().handleRemoveScrollbar;
    useEffect(function () {
        handleRemoveScrollbar(queue.length > 0);
    }, [handleRemoveScrollbar, queue.length]);
    var openDrawer = function (component, options) {
        drawerId++;
        setQueue(function (prev) { return __spreadArray(__spreadArray([], prev, true), [
            { id: "drawer-".concat(drawerId), component: component, options: options, state: 'open' },
        ], false); });
    };
    var closeDrawer = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setQueue(function (prev) {
            if (prev.length === 0)
                return prev;
            var lastIndex = prev.length - 1;
            if (prev[lastIndex].state === 'closing')
                return prev;
            return prev.map(function (entry, i) {
                return i === lastIndex ? __assign(__assign({}, entry), { state: 'closing' }) : entry;
            });
        });
        setTimeout(function () {
            setQueue(function (prev) {
                var _a, _b;
                var newQueue = __spreadArray([], prev, true);
                var closed = newQueue.pop();
                (_b = (_a = closed === null || closed === void 0 ? void 0 : closed.options) === null || _a === void 0 ? void 0 : _a.onClose) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([_a], args, false));
                return newQueue;
            });
        }, ANIMATION_DURATION);
    };
    return (_jsxs(DrawerContext.Provider, { value: { openDrawer: openDrawer, closeDrawer: closeDrawer }, children: [children, queue.map(function (entry, index) { return (_jsx(DrawerPortalEntry, { entry: entry, index: index, totalCount: queue.length, onClose: closeDrawer }, entry.id)); })] }));
}
function useDrawer() {
    return useContext(DrawerContext);
}
export { DrawerProvider, useDrawer };
