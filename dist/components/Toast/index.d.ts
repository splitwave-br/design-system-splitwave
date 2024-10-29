import { TIcons } from "../../components/Icon";
export interface ToastProps {
    message: string;
    timeout?: number;
    onClose?: () => void;
    icon?: TIcons;
    error?: boolean;
    success?: boolean;
    priority?: boolean;
    title?: string;
}
export declare function Toast({ title: _title, message, timeout, onClose, icon, error, success, }: ToastProps): import("react/jsx-runtime").JSX.Element | null;
