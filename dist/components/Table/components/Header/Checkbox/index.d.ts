import { HeaderProps } from "../../../../../components/Table/components/Header";
type CheckboxHeaderProps = HeaderProps & {
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
};
export declare const CheckboxHeader: {
    ({ checked, onChange, disabled, children, ...headerProps }: CheckboxHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
