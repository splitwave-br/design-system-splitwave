import React, { ButtonHTMLAttributes } from "react";
import "./variables.scss";
export type ButtonSize = "medium" | "large";
export type TButtonVariants = "primary" | "secondary" | "tertiary" | "link-gray" | "link-color";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariants;
    size?: ButtonSize;
    children: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
