import { IFilterPeriod } from "./types";
import "react-day-picker/dist/style.css";
interface DatePickerProps {
    isOpen: boolean;
    mode?: "range" | "single";
    handleToggle: () => void;
    handleSetCustomDate: (period: IFilterPeriod | Date | undefined) => void;
}
export declare const DatePicker: ({ isOpen, mode, handleToggle, handleSetCustomDate, }: DatePickerProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
