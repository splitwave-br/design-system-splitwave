import { MultiSelectProps } from "../../controls/MultiSelect/types";
export interface IRHFMultiSelect<T> extends Omit<MultiSelectProps<T>, "value"> {
    name: string;
}
export declare const RHFMultiselect: <T>({ getLabel, getValue, onChange, onRemove, options, name, ...props }: IRHFMultiSelect<T>) => import("react/jsx-runtime").JSX.Element;
