import { Route } from '../types/route';
import './variables.scss';
interface WrapperProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}
export interface NavItemProps {
    route: Route;
    isActive?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    renderWrapper?: (props: WrapperProps) => JSX.Element;
}
export declare const NavItem: ({ route, isActive, onClick, disabled, renderWrapper, }: NavItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
