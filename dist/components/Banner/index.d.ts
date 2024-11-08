import { ReactNode } from "react";
import "./variables.scss";
export type TBannerVariants = "informative" | "danger";
export type TBannerProps = {
    children: ReactNode;
    variant?: TBannerVariants;
    className?: string;
};
export declare const Banner: ({ children, variant, ...props }: TBannerProps) => import("react/jsx-runtime").JSX.Element;
