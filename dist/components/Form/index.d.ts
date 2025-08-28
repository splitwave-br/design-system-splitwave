import { Field } from "./components/Field";
import { Label } from "./components/Label";
import { RHFCheckbox } from "./components/RHFCheckbox";
export * from "./controls";
export * from "./components/types";
export declare const Form: {
    Field: typeof Field;
    Label: typeof Label;
    Checkbox: typeof RHFCheckbox;
    Select: <T>({ getLabel, getValue, options, name, ...props }: import(".").IRHFSelect<T>) => import("react/jsx-runtime").JSX.Element;
    MultiSelect: <T>({ getLabel, getValue, options, name, ...props }: import(".").IRHFMultiSelect<T>) => import("react/jsx-runtime").JSX.Element;
};
