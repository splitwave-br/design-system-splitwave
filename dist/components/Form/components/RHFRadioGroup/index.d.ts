import { RadioOption, RadioVariant } from "../../controls/Radio/types";
export interface RHFRadioGroupProps {
    name: string;
    options: RadioOption[];
    variant?: RadioVariant;
    className?: string;
    onSelect?: (value: string) => void;
}
export declare const RHFRadioGroup: ({ name, options, variant, className, onSelect, }: RHFRadioGroupProps) => import("react/jsx-runtime").JSX.Element;
