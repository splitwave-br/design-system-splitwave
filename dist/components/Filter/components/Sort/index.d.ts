import React from "react";
import "./variables.scss";
type TSelect = {
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    getId?: (option: any) => string;
    field: string;
    label?: string;
    options: any;
    className?: string;
};
export declare const Sort: React.ForwardRefExoticComponent<TSelect & React.RefAttributes<HTMLDivElement>>;
export {};
