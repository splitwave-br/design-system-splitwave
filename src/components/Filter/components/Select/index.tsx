"use client";
import { Select as SelectControl } from "@/components/Form/controls/Select";
import { useFilterContext } from "../../hooks/useFilter";
import { Form } from "@/components/Form";
import { useFilterFields } from "../../hooks/useFields";
import { useEffect } from "react";

export interface FilterSelectProps<T> {
  getLabel: (option: T) => string;
  getValue: (option: T) => string;
  field: string;
  label?: string;
  options: T[];
  className?: string;
}
export const Select = <T,>({
  getLabel,
  getValue: getValueOption,
  field,
  label,
  options,
  className,
}: FilterSelectProps<T>) => {
  const { setFilter, getValue } = useFilterContext();
  const { registerField } = useFilterFields();

  useEffect(() => {
    registerField(field);
  }, [field, registerField]);

  const handleChange = (option: any) => {
    return setFilter(field, getValueOption(option));
  };

  return (
    <Form.Field className={className}>
      {label && <Form.Label>{label}</Form.Label>}
      <SelectControl
        autoFocus
        onChange={handleChange}
        options={options}
        getLabel={getLabel}
        getValue={getValueOption}
        value={getValue(field) || ""}
      />
    </Form.Field>
  );
};
