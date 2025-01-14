import React from "react";
import "./variables.scss";
type CheckboxFiltersProps = {
    field: string;
    options: any[];
    label: string;
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    hasClear?: boolean;
    isEjected?: boolean;
    className?: string;
};
export declare const CheckboxFilters: React.ForwardRefExoticComponent<CheckboxFiltersProps & React.RefAttributes<HTMLInputElement>>;
export {};
