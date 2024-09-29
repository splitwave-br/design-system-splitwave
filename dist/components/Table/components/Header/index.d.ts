import { ReactNode } from "react";
export type HeaderProps = {
    children?: ReactNode;
    isFixed?: boolean;
    minWidth?: string;
    width?: string;
};
export declare const Header: {
    ({ children, isFixed }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    Date: {
        (props: HeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Uuid: {
        (props: HeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Action: {
        (props: HeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
