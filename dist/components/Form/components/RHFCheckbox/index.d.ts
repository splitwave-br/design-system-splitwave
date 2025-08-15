import { CheckboxProps } from "../../controls/Checkbox";
export interface RHFCheckboxProps extends Partial<Omit<CheckboxProps, "value" | "onChange">> {
    name: string;
    onCheck?: (value?: boolean) => void;
}
export declare function RHFCheckbox({ name, onCheck, ...props }: RHFCheckboxProps): import("react/jsx-runtime").JSX.Element;
