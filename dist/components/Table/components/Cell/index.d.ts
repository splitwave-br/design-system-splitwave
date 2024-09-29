export declare const Cell: {
    Date: ({ children }: import("../../types").TCell & {
        children: string | Date;
    }) => import("react/jsx-runtime").JSX.Element;
    Price: ({ children, hasHighlight }: import("../../types").TCell & {
        children: number;
        hasHighlight?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    Badge: ({ children, ...props }: import("../../types").TCell & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
        children: import("react").ReactNode;
        variant?: import("../../../Badge").TVariant;
        size?: import("../../../Badge").TSizes;
        disabled?: boolean;
        className?: string;
    } & {
        children: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Text: ({ children, isFixed, shouldTruncateText, canCopy, }: import("../../types").TCell & {
        children: React.ReactNode;
        isFixed?: boolean;
        shouldTruncateText?: boolean;
        canCopy?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    Placeholder: ({ children }: import("../../types").TCell & {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Actions: ({ children, renderTrigger, isFixed, onClick }: import("../../types").TCell & {
        children: React.ReactNode;
        onClick?: (...args: any) => any;
        isFixed?: boolean;
        renderTrigger?: (props: any, ref: import("react").ForwardedRef<any>) => React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    ActionItem: ({ className, ...props }: import("../../../Dropdown/Item").default) => import("react/jsx-runtime").JSX.Element;
    Skeleton: () => import("react/jsx-runtime").JSX.Element;
};
