import { ButtonHTMLAttributes, ReactNode } from "react";
import "./variables.scss";
export type TVariant = "purple" | "gray" | "dark-gray" | "blue-light" | "error" | "blue" | "orange" | "warning" | "indigo" | "success";
export type TSizes = "sm" | "md" | "lg";
export type TBadge = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: TVariant;
    size?: TSizes;
    disabled?: boolean;
    className?: string;
};
export declare function Badge({ children, variant, size, disabled, className, ...props }: TBadge): import("react/jsx-runtime").JSX.Element;
