import { ElementType } from "react";
import React from "react";
type TButton = {
    icon?: ElementType;
    children: React.ReactNode;
    isOpen?: boolean;
    fields?: string[];
};
export declare const Button: React.ForwardRefExoticComponent<TButton & React.RefAttributes<HTMLButtonElement>>;
export {};
