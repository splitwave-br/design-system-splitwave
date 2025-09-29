import "./variables.scss";
interface SidebarProps {
    children: React.ReactNode;
}
export declare const Sidebar: {
    ({ children }: SidebarProps): import("react/jsx-runtime").JSX.Element;
    NavSection: ({ children, disableBottomBorder }: import("./components/NavSection").NavSectionProps) => import("react/jsx-runtime").JSX.Element;
    NavGroup: <T>({ route, isOpened, disabled, onClickItem, onClick, getIsRouteActive, getShouldShowRoute, }: import("./components/NavGroup").NavGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
    NavItem: ({ route, isActive, onClick, disabled, renderWrapper, }: import("./components/NavItem").NavItemProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, className }: import("./components/Footer").SidebarFooterProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
