"use client";
import styles from "react-day-picker/dist/style.css";
import { Checkbox } from "../../controls/Checkbox";
import { useFormContext } from "react-hook-form";

export interface RHFCheckboxProps {
  name: string;
  label: string;
}
export function RHFCheckbox({ label, name }: RHFCheckboxProps) {
  const { watch, getValues, setValue } = useFormContext();

  const isChecked = watch(name);

  const handleCheck = () => {
    return setValue(name, !getValues(name), {
      shouldValidate: true,
    });
  };

  return <Checkbox label={label} onChange={handleCheck} value={isChecked} />;
}
