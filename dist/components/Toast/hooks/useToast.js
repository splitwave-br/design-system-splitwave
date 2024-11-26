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
import { PresetEnum, Toast } from "../../../components/Toast";
import styles from "../styles.module.scss";
import { generateUUID } from "../../../utils/generateUUID";
var ToastContext = createContext({});
var defaultTimeout = 5000;
function ToastProvider(_a) {
    var children = _a.children;
    var _b = useState([]), toastMessagesQueue = _b[0], setToastMessagesQueue = _b[1];
    var getNewToastMessagesQueue = function (prev, toastProps) {
        var newToast = __assign(__assign({ timeout: defaultTimeout }, toastProps), { id: "".concat(generateUUID()) });
        return __spreadArray(__spreadArray([], prev, true), [newToast], false);
    };
    var openToast = function (toastProps) {
        var message = toastProps.message;
        if (typeof message === "string")
            setToastMessagesQueue(function (prev) {
                return getNewToastMessagesQueue(prev, toastProps);
            });
        if (Array.isArray(message)) {
            var _loop_1 = function (msg) {
                setToastMessagesQueue(function (prev) {
                    return getNewToastMessagesQueue(prev, __assign(__assign({}, toastProps), { message: msg }));
                });
            };
            for (var _i = 0, message_1 = message; _i < message_1.length; _i++) {
                var msg = message_1[_i];
                _loop_1(msg);
            }
        }
    };
    var openToastSuccess = function (message, toastProps) {
        openToast(__assign(__assign({ preset: PresetEnum.Success }, toastProps), { message: message }));
    };
    var openToastError = function (message, toastProps) {
        openToast(__assign(__assign({ preset: PresetEnum.Error }, toastProps), { message: message }));
    };
    var closeToast = function (id) {
        setToastMessagesQueue(function (prev) { return prev.filter(function (toast) { return toast.id !== id; }); });
    };
    return (_jsxs(ToastContext.Provider, { value: {
            openToast: openToast,
            openToastSuccess: openToastSuccess,
            openToastError: openToastError,
        }, children: [children, _jsx("div", { className: styles.wrapperContainer, children: toastMessagesQueue.map(function (toastMessage) { return (_jsx(Toast, __assign({}, toastMessage, { onClose: function () { return closeToast(toastMessage.id); } }), "toast-message-".concat(toastMessage.id))); }) })] }));
}
function useToast() {
    return useContext(ToastContext);
}
export { ToastProvider, useToast };
