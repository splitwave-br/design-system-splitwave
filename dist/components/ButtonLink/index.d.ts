import { ReactNode } from "react";
import { ButtonProps } from "../../components/Button";
export type ButtonLinkProps = ButtonProps & {
    href: string;
    children: ReactNode;
};
export declare const ButtonLink: ({ href, children, ...props }: ButtonLinkProps) => import("react/jsx-runtime").JSX.Element;
