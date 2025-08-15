import React from "react";
export type CheckboxProps = {
    label?: string;
    onChange: () => void;
    value: boolean;
    disabled?: boolean;
    className?: string;
    disableHover?: boolean;
};
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
