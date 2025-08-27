import "@/components/Form/controls/Input/variables.scss";
interface SelectedValuesProps {
    selectedOptions: any[] | undefined;
    getLabel: (option: any) => string;
    placeholder: string;
    disabled?: boolean;
    onRemove: (option: any) => void;
}
export declare const SelectedValues: ({ selectedOptions, placeholder, disabled, getLabel, onRemove, }: SelectedValuesProps) => import("react/jsx-runtime").JSX.Element;
export {};
