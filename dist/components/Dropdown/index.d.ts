import Item from "./Item";
export declare const Dropdown: {
    Container: ({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }) => import("react/jsx-runtime").JSX.Element | null;
    Trigger: import("react").ForwardRefExoticComponent<import("./Trigger").TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Menu: import("react").ForwardRefExoticComponent<import("./Menu").MenuProps & import("react").RefAttributes<HTMLDivElement>>;
    Divider: () => import("react/jsx-runtime").JSX.Element;
    Item: ({ className, shouldCloseOnClick, onClick, ...props }: Item) => import("react/jsx-runtime").JSX.Element;
};
