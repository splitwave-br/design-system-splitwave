"use client";
import { Select as SelectControl } from "@/components/Form/controls/Select";
import { useFilterContext } from "../../hooks/useFilter";
import { Form } from "@/components/Form";
import { useFilterFields } from "../../hooks/useFields";
import { useEffect } from "react";

type TSelect = {
  getLabel: (option: any) => string;
  getValue: (option: any) => string;
  getId?: (option: any) => string;
  field: string;
  label?: string;
  options: any;
  className?: string;
};
export const Select = ({
  getLabel,
  getValue: getValueOption,
  getId,
  field,
  label,
  options,
  className,
}: TSelect) => {
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
        getId={getId}
        value={getValue(field) || ""}
      />
    </Form.Field>
  );
};
