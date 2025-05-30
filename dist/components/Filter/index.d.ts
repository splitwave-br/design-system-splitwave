export declare const Filter: {
    Container: {
        ({ children, shouldEjectOnMobile, shouldPortal, }: {
            children: React.ReactNode;
            shouldEjectOnMobile?: boolean;
            shouldPortal?: boolean;
        }): import("react/jsx-runtime").JSX.Element | null;
        displayName: string;
    };
    Button: import("react").ForwardRefExoticComponent<import("../../components/Filter/components/Button").FilterButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<{
        children: React.ReactNode;
        className?: string;
        onClose?: () => void;
        shouldCloseOnClick?: boolean;
        hasClear?: boolean;
        spacing?: "default" | "sm";
        isEjected?: boolean;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Wrapper: ({ children, register }: import("./hooks/useFilter").IFilterProviderProps) => import("react/jsx-runtime").JSX.Element;
    Responsive: ({ children, wrapperFiltersClassName, }: import("./components/Responsive").ResponsiveProps) => import("react/jsx-runtime").JSX.Element;
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
    Check: import("react").ForwardRefExoticComponent<{
        field: string;
        options: any[];
        label: string;
        getLabel: (option: any) => string;
        getValue: (option: any) => string;
        hasClear?: boolean;
        isEjected?: boolean;
        className?: string;
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
    Date: {
        ({ isPeriod, formatter, label, disabled, ...props }: import("./components/Date/types").DateFilterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
