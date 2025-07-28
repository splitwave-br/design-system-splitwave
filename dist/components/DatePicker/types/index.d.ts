import { RefObject } from 'react';
import { type Matcher } from 'react-day-picker';
export interface IFilterPeriod {
    startDate: string;
    endDate: string;
}
export interface DatePickerRangeProps {
    mode: 'range';
    handlePickDate: (date: IFilterPeriod | undefined) => void;
}
export interface DatePickerSingleProps {
    mode: 'single';
    handlePickDate: (date: string | undefined) => void;
}
export interface DatePickerCommonProps {
    isOpen: boolean;
    handleToggle: () => void;
    formatter?: (date: Date) => string;
    parentRef: RefObject<HTMLDivElement>;
    disabled?: Matcher;
    asPortal?: boolean;
}
export type DatePickerProps = DatePickerCommonProps & (DatePickerRangeProps | DatePickerSingleProps);
