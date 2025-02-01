import { ElementType } from "react";
import "./variables.scss";
import React from "react";
import { ButtonProps } from "../../../../components/Button";
export interface FilterButtonProps extends Omit<ButtonProps, "variant" | "size"> {
    icon?: ElementType;
    children: React.ReactNode;
    isOpen?: boolean;
    fields?: string[];
}
export declare const Button: React.ForwardRefExoticComponent<FilterButtonProps & React.RefAttributes<HTMLButtonElement>>;
