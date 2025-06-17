import React from "react";
import "./variables.scss";
export type RadioVariant = "default" | "success";
export interface RadioOption {
    label: string;
    value: string;
}
export interface RadioProps {
    options: RadioOption[];
    value?: string;
    onSelect: (value: string) => void;
    variant?: RadioVariant;
    className?: string;
}
export declare const Radio: React.FC<RadioProps>;
