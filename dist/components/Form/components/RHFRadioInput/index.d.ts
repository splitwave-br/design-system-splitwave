import { RadioProps } from "../../controls/Radio/types";
export interface RHFRadioInputProps extends Omit<RadioProps, 'onSelect' | 'checked'> {
    name: string;
    onSelect?: (value: string) => void;
}
export declare const RHFRadioInput: ({ label, name, variant, className, id, value, onSelect, }: RHFRadioInputProps) => import("react/jsx-runtime").JSX.Element;
