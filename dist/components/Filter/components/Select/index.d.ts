type TSelect = {
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    getId?: (option: any) => string;
    field: string;
    label?: string;
    options: any;
    className?: string;
};
export declare const Select: ({ getLabel, getValue: getValueOption, getId, field, label, options, className, }: TSelect) => import("react/jsx-runtime").JSX.Element;
export {};
