import { ComponentProps, ReactNode } from "react";
import "./variables.scss";
type Props = ComponentProps<"label"> & {
    children: ReactNode;
};
export declare function Label({ children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
