export interface FilterSelectProps<T> {
    getLabel: (option: T) => string;
    getValue: (option: T) => string;
    field: string;
    label?: string;
    options: T[];
    className?: string;
}
export declare const Select: <T>({ getLabel, getValue: getValueOption, field, label, options, className, }: FilterSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
