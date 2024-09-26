import React from "react";
type TRenderItem = {
    option: any;
    className: string;
    onClick: (option: any) => any;
};
export interface ISelect extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    value?: string;
    options: any[];
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    getId?: (option: any) => string;
    renderItem?: (params: TRenderItem) => React.ReactNode;
}
export declare function Select({ className, options, getLabel, getValue, getId, placeholder, onChange, renderItem, value: defaultValue, ...props }: ISelect): import("react/jsx-runtime").JSX.Element;
export {};
