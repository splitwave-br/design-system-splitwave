import { BaseSelectProps } from "../../Select/types";
export interface MultiSelectProps<T> extends Omit<BaseSelectProps<T>, "value"> {
    value?: any[];
    disableDeselect?: boolean;
    hasClear?: boolean;
    onChange?: (optionValue: any) => void;
    onRemove?: (optionValue: any) => void;
}
