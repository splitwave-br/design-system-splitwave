export type { DrawerRootProps } from './components/Root';
export type { DrawerHeaderProps } from './components/Header';
export type { DrawerBodyProps } from './components/Body';
export type { DrawerFooterProps } from './components/Footer';
export declare const Drawer: {
    Root: ({ children, className }: import(".").DrawerRootProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ title, onClose, className }: import(".").DrawerHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className }: import(".").DrawerBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, className }: import(".").DrawerFooterProps) => import("react/jsx-runtime").JSX.Element;
};
