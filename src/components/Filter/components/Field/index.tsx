"use client";
import { Input } from "@/components/Form/controls/Input";
import { useFilterContext } from "../../hooks/useFilter";
import { useEffect, useRef } from "react";
import { Form } from "@/components/Form";
import { useFilterFields } from "../../hooks/useFields";

type TField = {
  field: string;
  label?: string;
  mask?: (value: string) => string;
};
export const Field = ({ field, label, mask }: TField) => {
  const { setFilter, getValue } = useFilterContext();
  const { registerField } = useFilterFields();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField(field);
  }, [field, registerField]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mask) return setFilter(field, mask(e.target.value));

    return setFilter(field, e.target.value);
  };

  return (
    <Form.Field>
      {label && <Form.Label>{label}</Form.Label>}
      <Input
        ref={inputRef}
        onChange={handleChange}
        value={getValue(field) || ""}
      />
    </Form.Field>
  );
};
