import "./variants.module.scss";
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
export declare const Radio: ({ options, value, onSelect, variant, className, }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export default Radio;
