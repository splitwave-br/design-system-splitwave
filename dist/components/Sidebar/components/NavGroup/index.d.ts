import '../NavItem/variables.scss';
import { Route } from "../types/route";
export interface NavGroupProps<T = {}> {
    route: Route<T>;
    isOpened?: boolean;
    onClick?: () => void;
    onClickItem?: () => void;
    disabled?: boolean;
    getIsRouteActive: (routePath: Route["path"]) => boolean;
    getShouldShowRoute?: (route: Route<T>) => boolean;
}
export declare const NavGroup: <T>({ route, isOpened, disabled, onClickItem, onClick, getIsRouteActive, getShouldShowRoute, }: NavGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
