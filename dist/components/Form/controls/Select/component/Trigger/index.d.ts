import { TIcons } from "../../../../../../components/Icon";
import "../../../Input/variables.scss";
type SelectTriggerProps = {
    prefix?: TIcons;
    disabled?: boolean;
    selectedLabel?: string;
    placeholder: string;
    searchable: boolean;
    isOpen: boolean;
    searchValue: string;
    onSearchChange: (value: string) => void;
    triggerClassname?: string;
};
export declare const SelectTrigger: ({ prefix, disabled, selectedLabel, placeholder, searchable, isOpen, searchValue, onSearchChange, triggerClassname, }: SelectTriggerProps) => import("react/jsx-runtime").JSX.Element;
export {};
