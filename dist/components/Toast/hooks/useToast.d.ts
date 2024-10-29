import React from "react";
import { ToastProps } from "../../../components/Toast";
interface ToastProviderProps {
    children: React.ReactNode;
}
interface IToastContextData {
    openToast: (params: ToastProps) => void;
    openToastSuccess: (message: string, params?: ToastProps) => void;
    openToastError: (message: string, params?: ToastProps) => void;
}
declare function ToastProvider({ children }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
declare function useToast(): IToastContextData;
export { ToastProvider, useToast };
