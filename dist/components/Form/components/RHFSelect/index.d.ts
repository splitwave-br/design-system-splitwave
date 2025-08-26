import "../../controls/Input/variables.scss";
import { SelectProps } from "../../controls/Select/types";
export interface IRHFSelect<T> extends Omit<SelectProps<T>, "onChange"> {
    name: string;
}
export declare const RHFSelect: <T>({ getLabel, getValue, options, name, ...props }: IRHFSelect<T>) => import("react/jsx-runtime").JSX.Element;
