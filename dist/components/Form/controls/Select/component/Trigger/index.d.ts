import { TIcons } from "../../../../../../components/Icon";
import "../../../Input/variables.scss";
type SelectTriggerProps = {
    prefix?: TIcons;
    disabled?: boolean;
    selectedLabel?: string;
    shouldRenderSearch: boolean;
    searchValue: string;
    onSearchChange: (value: string) => void;
    triggerClassname?: string;
    children: React.ReactNode;
};
export declare const SelectTrigger: ({ prefix, disabled, selectedLabel, children, shouldRenderSearch, searchValue, onSearchChange, triggerClassname, }: SelectTriggerProps) => import("react/jsx-runtime").JSX.Element;
export {};
