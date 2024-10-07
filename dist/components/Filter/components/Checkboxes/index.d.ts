import React from "react";
type CheckboxFiltersProps = {
    field: string;
    options: any[];
    getLabel: (option: any) => string;
    getValue: (option: any) => string;
    hasClear?: boolean;
};
export declare const CheckboxFilters: React.ForwardRefExoticComponent<CheckboxFiltersProps & React.RefAttributes<HTMLInputElement>>;
export {};
