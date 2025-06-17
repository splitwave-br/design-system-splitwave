import { TCell } from "../../../../../components/Table/types";
import { ReactNode } from "react";
type TProps = TCell & {
    children: ReactNode;
    className?: string;
};
export declare const Card: ({ children, className }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
