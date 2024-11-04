import React from "react";
type TRenderItem = {
    option: any;
    className: string;
    onClick: (option: any) => any;
};
export interface IMultiSelect extends React.InputHTMLAttributes<HTMLInputElement> {
    direction?: "top" | "bottom";
    size?: 1 | 2;
    className?: string;
    value?: string[];
    options: any[];
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    getId?: (option: any) => string;
    renderItem?: (params: TRenderItem) => React.ReactNode;
    onChange?: (value: any) => void;
}
export declare function MultiSelect({ size, direction, className, options, getLabel, getValue, getId, placeholder, onChange, renderItem, value: _value, ...props }: IMultiSelect): import("react/jsx-runtime").JSX.Element;
export {};
