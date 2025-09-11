export type RadioVariant = "default" | "success";
export interface RadioProps {
    id: string;
    name: string;
    label: string;
    value: string;
    checked?: boolean;
    onSelect: (value: string) => void;
    variant?: RadioVariant;
    className?: string;
}
export interface RadioOption {
    label: string;
    value: string;
}
