import React from "react";
interface MenuItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    isSelected: boolean;
    className?: string;
}
export declare const MenuItem: ({ children, className, isSelected, onClick, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
