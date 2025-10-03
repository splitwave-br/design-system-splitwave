import { TIcon } from "../../components/Icon";
export interface RotatingIconProps extends Partial<TIcon> {
    isOpen: boolean;
}
export declare const RotatingIcon: ({ name, className, ...props }: RotatingIconProps) => import("react/jsx-runtime").JSX.Element;
