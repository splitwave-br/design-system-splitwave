import React from "react";
type CheckboxFiltersProps = {
    field: string;
    options: any[];
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    getId?: (option: any) => string;
};
export declare const CheckboxFilters: React.ForwardRefExoticComponent<CheckboxFiltersProps & React.RefAttributes<HTMLInputElement>>;
export {};
