import { TCell } from "../../../../../components/Table/types";
type TCheckboxCellProps = TCell & {
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
};
export declare const CheckboxCell: ({ checked, onChange, disabled, children, }: TCheckboxCellProps) => import("react/jsx-runtime").JSX.Element;
export {};
