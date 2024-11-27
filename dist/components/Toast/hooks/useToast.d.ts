import React from "react";
import { ToastProps } from "../../../components/Toast";
interface ToastPropsWithArrayMessages extends Omit<ToastProps, "message"> {
    message: string | string[];
}
interface ToastProviderProps {
    children: React.ReactNode;
}
interface IToastContextData {
    openToast: (params: ToastPropsWithArrayMessages) => void;
    openToastSuccess: (message: string | string[], params?: ToastPropsWithArrayMessages) => void;
    openToastError: (message: string | string[], params?: ToastPropsWithArrayMessages) => void;
}
declare function ToastProvider({ children }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
declare function useToast(): IToastContextData;
export { ToastProvider, useToast };
