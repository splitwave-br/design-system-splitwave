import { TIcons } from "../../components/Icon";
export declare enum PresetEnum {
    Error = "error",
    Success = "success"
}
export interface ToastProps {
    message: string;
    timeout?: number;
    onClose?: () => void;
    icon?: TIcons;
    title?: string;
    preset?: PresetEnum;
}
export declare function Toast({ title: _title, message, timeout, onClose, icon, preset, }: ToastProps): import("react/jsx-runtime").JSX.Element | null;
