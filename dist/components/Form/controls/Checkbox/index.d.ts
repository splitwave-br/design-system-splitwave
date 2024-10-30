import React from "react";
type CheckboxProps = {
    label?: string;
    onChange: () => void;
    value: boolean;
};
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export {};
