export declare const Modal: {
    Overlay: ({ children, onClose }: {
        onClose: any;
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Wrapper: ({ children, title, onClose }: {
        children: React.ReactNode;
        title?: string;
        onClose?: (...args: any) => void;
    }) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Divider: () => import("react/jsx-runtime").JSX.Element;
};
