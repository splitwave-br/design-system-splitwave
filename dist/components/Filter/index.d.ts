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
        hasClear?: boolean;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Wrapper: ({ children, register }: import("./hooks/useFilter").IFilterProviderProps) => import("react/jsx-runtime").JSX.Element;
    Sort: import("react").ForwardRefExoticComponent<{
        getLabel: (option: any) => string;
        getValue: (option: any) => string;
        getId?: (option: any) => string;
        field: string;
        label?: string;
        options: any;
        className?: string;
    } & import("react").RefAttributes<HTMLDivElement>>;
};
