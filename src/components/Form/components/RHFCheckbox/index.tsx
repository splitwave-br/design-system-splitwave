"use client";
import { Checkbox, CheckboxProps } from "../../controls/Checkbox";
import { useFormContext } from "react-hook-form";

export interface RHFCheckboxProps
  extends Partial<Omit<CheckboxProps, "value" | "onChange">> {
  name: string;
  onCheck?: (value?: boolean) => void;
}

export function RHFCheckbox({ name, onCheck, ...props }: RHFCheckboxProps) {
  const { watch, getValues, setValue } = useFormContext();

  const isChecked = watch(name);

  const handleCheck = () => {
    const updatedValue = !getValues(name);

    setValue(name, updatedValue, {
      shouldValidate: true,
    });

    onCheck?.(updatedValue);
  };

  return <Checkbox onChange={handleCheck} value={isChecked} {...props} />;
}
