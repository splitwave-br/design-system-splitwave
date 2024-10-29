"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProvider = ToastProvider;
exports.useToast = useToast;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Toast_1 = require("../../../components/Toast");
const ToastContext = (0, react_1.createContext)({});
const defaultTimeout = 5000;
let id = 0;
function ToastProvider({ children }) {
    const [toastMessagesQueue, setToastMessagesQueue] = (0, react_1.useState)([]);
    const openToast = (toastProps) => {
        id++;
        setToastMessagesQueue((prev) => {
            if (toastProps.priority) {
                return [
                    {
                        id: `toast-message-${id}`,
                        timeout: defaultTimeout,
                        ...toastProps,
                    },
                ];
            }
            return [
                ...prev,
                {
                    id: `toast-message-${id}`,
                    timeout: defaultTimeout,
                    ...toastProps,
                },
            ];
        });
    };
    const openToastSuccess = (message, toastProps) => {
        openToast({
            success: true,
            priority: true,
            ...toastProps,
            message,
        });
    };
    const openToastError = (message, toastProps) => {
        openToast({
            error: true,
            priority: true,
            ...toastProps,
            message,
        });
    };
    const handleShift = () => {
        setToastMessagesQueue((prev) => {
            return [...prev.slice(1)];
        });
    };
    return ((0, jsx_runtime_1.jsxs)(ToastContext.Provider, { value: {
            openToast,
            openToastSuccess,
            openToastError,
        }, children: [children, toastMessagesQueue?.[0] && ((0, jsx_runtime_1.jsx)(Toast_1.Toast, { ...(toastMessagesQueue?.[0] || {}), onClose: handleShift }, toastMessagesQueue?.[0].id))] }));
}
function useToast() {
    return (0, react_1.useContext)(ToastContext);
}
