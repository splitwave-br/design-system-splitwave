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
import { createContext, useContext, useState } from "react";
import { Toast } from "../../../components/Toast";
var ToastContext = createContext({});
var defaultTimeout = 5000;
var id = 0;
function ToastProvider(_a) {
    var children = _a.children;
    var _b = useState([]), toastMessagesQueue = _b[0], setToastMessagesQueue = _b[1];
    var openToast = function (toastProps) {
        id++;
        setToastMessagesQueue(function (prev) {
            if (toastProps.priority) {
                return [
                    __assign({ id: "toast-message-".concat(id), timeout: defaultTimeout }, toastProps),
                ];
            }
            return __spreadArray(__spreadArray([], prev, true), [
                __assign({ id: "toast-message-".concat(id), timeout: defaultTimeout }, toastProps),
            ], false);
        });
    };
    var openToastSuccess = function (message, toastProps) {
        openToast(__assign(__assign({ success: true, priority: true }, toastProps), { message: message }));
    };
    var openToastError = function (message, toastProps) {
        openToast(__assign(__assign({ error: true, priority: true }, toastProps), { message: message }));
    };
    var handleShift = function () {
        setToastMessagesQueue(function (prev) {
            return __spreadArray([], prev.slice(1), true);
        });
    };
    return (_jsxs(ToastContext.Provider, { value: {
            openToast: openToast,
            openToastSuccess: openToastSuccess,
            openToastError: openToastError,
        }, children: [children, (toastMessagesQueue === null || toastMessagesQueue === void 0 ? void 0 : toastMessagesQueue[0]) && (_jsx(Toast, __assign({}, ((toastMessagesQueue === null || toastMessagesQueue === void 0 ? void 0 : toastMessagesQueue[0]) || {}), { onClose: handleShift }), toastMessagesQueue === null || toastMessagesQueue === void 0 ? void 0 : toastMessagesQueue[0].id))] }));
}
function useToast() {
    return useContext(ToastContext);
}
export { ToastProvider, useToast };
