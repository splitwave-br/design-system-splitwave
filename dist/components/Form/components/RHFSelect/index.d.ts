import { SelectProps } from "../../controls/Select/types";
export interface IRHFSelect<T> extends SelectProps<T> {
    name: string;
}
export declare const RHFSelect: <T>({ getLabel, getValue, onChange, options, name, ...props }: IRHFSelect<T>) => import("react/jsx-runtime").JSX.Element;
