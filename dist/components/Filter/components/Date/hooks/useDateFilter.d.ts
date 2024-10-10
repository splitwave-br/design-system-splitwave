import { IFilterPeriod } from "../../../../../components/DatePicker/types";
export declare const useDateFilter: (props: any, isPeriod: boolean) => {
    isOpen: boolean;
    handleToggle: () => void;
    handlePickDate: (date: string | IFilterPeriod | undefined) => void;
    buttonLabel: string;
};
