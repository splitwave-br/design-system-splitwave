export interface DrawerHeaderProps {
    title: string;
    onClose?: (...args: any) => void;
    className?: string;
}
declare const Header: ({ title, onClose, className }: DrawerHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
