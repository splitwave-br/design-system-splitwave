import { Field } from "./components/Field";
import { Label } from "./components/Label";
import { RHFCheckbox } from "./components/RHFCheckbox";
export * from "./controls";
export * from "./components/types";
export declare const Form: {
    Field: typeof Field;
    Label: typeof Label;
    Checkbox: typeof RHFCheckbox;
    Select: <T>({ getLabel, getValue, onChange, options, name, ...props }: import(".").IRHFSelect<T>) => import("react/jsx-runtime").JSX.Element;
    MultiSelect: <T>({ getLabel, getValue, onChange, onRemove, options, name, ...props }: import(".").IRHFMultiSelect<T>) => import("react/jsx-runtime").JSX.Element;
    Radio: ({ label, name, variant, className, id, value, onSelect, }: import(".").RHFRadioInputProps) => import("react/jsx-runtime").JSX.Element;
    RadioGroup: ({ name, options, variant, className, onSelect, }: import(".").RHFRadioGroupProps) => import("react/jsx-runtime").JSX.Element;
};
