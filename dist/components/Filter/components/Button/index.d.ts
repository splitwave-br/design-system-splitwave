import { ElementType } from "react";
type TButton = {
    icon?: ElementType;
    children: React.ReactNode;
    isOpen?: boolean;
};
export declare const Button: import("react").ForwardRefExoticComponent<TButton & import("react").RefAttributes<HTMLButtonElement>>;
export {};
