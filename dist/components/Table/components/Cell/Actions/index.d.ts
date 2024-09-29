import { TCell } from "../../../../../components/Table/types";
import { ForwardedRef } from "react";
type TProps = TCell & {
    children: React.ReactNode;
    onClick?: (...args: any) => any;
    isFixed?: boolean;
    renderTrigger?: (props: any, ref: ForwardedRef<any>) => React.ReactNode;
};
export declare const Actions: ({ children, renderTrigger, isFixed, onClick }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
