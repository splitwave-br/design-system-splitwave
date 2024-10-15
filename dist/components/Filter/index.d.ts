export declare const Filter: {
    Container: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Button: import("react").ForwardRefExoticComponent<{
        icon?: import("react").ElementType;
        children: React.ReactNode;
        isOpen?: boolean;
    } & import("react").RefAttributes<HTMLButtonElement>>;
    Field: ({ field, label, mask }: {
        field: string;
        label?: string;
        mask?: (value: string) => string;
    }) => import("react/jsx-runtime").JSX.Element;
    Select: ({ getLabel, getValue: getValueOption, getId, field, label, options, className, }: {
        getLabel: (option: any) => string;
        getValue: (option: any) => string;
        getId?: (option: any) => string;
        field: string;
        label?: string;
        options: any;
        className?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Content: import("react").ForwardRefExoticComponent<{
        children: React.ReactNode;
        className?: string;
        onClose?: () => void;
        shouldCloseOnClick?: boolean;
        hasClear?: boolean;
        spacing?: "default" | "sm";
    } & import("react").RefAttributes<HTMLDivElement>>;
    Wrapper: ({ children, register }: import("./hooks/useFilter").IFilterProviderProps) => import("react/jsx-runtime").JSX.Element;
    Check: import("react").ForwardRefExoticComponent<{
        field: string;
        options: any[];
        getLabel: (option: any) => string;
        getValue: (option: any) => string;
        hasClear?: boolean;
    } & import("react").RefAttributes<HTMLInputElement>>;
    Sort: import("react").ForwardRefExoticComponent<{
        getLabel: (option: any) => string;
        getValue: (option: any) => string;
        getId?: (option: any) => string;
        field: string;
        label?: string;
        options: any;
        className?: string;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Date: ({ isPeriod, formatter, label, ...props }: import("./components/Date/types").DateFilterProps) => import("react/jsx-runtime").JSX.Element;
};
