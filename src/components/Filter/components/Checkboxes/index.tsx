"use client";

import React, { forwardRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { useFilterFields } from "../../hooks/useFields";
import { Filter } from "../..";
import { Dropdown } from "@/components/Dropdown";
import { concatStyles } from "@/utils/concatStyles";
import Checked from "./components/Checked";
import Unchecked from "./components/Unchecked";
import useWindowSize from "@/hooks/useWindowSize";
import { Form } from "@/components/Form";
import { MultiSelect as MultiSelectControl } from "@/components/Form/controls/MultiSelect";

type CheckboxFiltersProps = {
  field: string;
  options: any[];
  label: string;
  getLabel: (option: any) => string;
  getValue: (option: any) => string;
  hasClear?: boolean;
  isEjected?: boolean; // It is used to don't use dropdown on mobile
};
export const CheckboxFilters = forwardRef<
  HTMLInputElement,
  CheckboxFiltersProps
>(
  (
    {
      field,
      label,
      hasClear = false,
      getLabel,
      getValue: getOptionValue,
      options,
      isEjected,
    },
    ref,
  ) => {
    const { isMobile } = useWindowSize();
    const { setFilter, getValue } = useFilterContext();
    const { registerField } = useFilterFields();

    const selectedValues = getValue(field)?.split(",").filter(Boolean) || [];

    const handleChange = (value: string) => {
      const isChecked = selectedValues.includes(value);
      const newValues = isChecked
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];

      setFilter(field, newValues.filter(Boolean).join(","));
    };

    const handleChangeMobile = (value: any[]) => {
      const newValues = value.map(getOptionValue);

      setFilter(field, newValues.filter(Boolean).join(","));
    };

    useEffect(() => {
      registerField(field);
    }, []);

    if (isMobile && isEjected) {
      return (
        <Filter.Content isEjected>
          <Form.Field>
            {label && <Form.Label>{label}</Form.Label>}
            <MultiSelectControl
              autoFocus
              onChange={handleChangeMobile}
              options={options}
              getLabel={getLabel}
              getValue={getOptionValue}
              getId={getOptionValue}
              value={
                options.filter((opt) =>
                  selectedValues.includes(getOptionValue(opt)),
                ) || []
              }
            />
          </Form.Field>
        </Filter.Content>
      );
    }

    return (
      <Dropdown.Menu ref={ref}>
        {options.map((option, index) => {
          const isLastItem = index === options.length - 1;
          const shouldShowDivider = hasClear && isLastItem;
          const optionValue = getOptionValue(option);
          const optionLabel = getLabel(option);
          const isChecked = selectedValues.includes(optionValue);

          return (
            <React.Fragment key={optionValue}>
              <label htmlFor={optionValue} className={styles.field}>
                <div
                  className={concatStyles([
                    styles.inputWrapper,
                    isChecked ? styles.isChecked : "",
                  ])}
                >
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id={optionValue}
                    onChange={() => handleChange(optionValue)}
                    checked={selectedValues.includes(optionValue)}
                  />

                  {isChecked ? <Checked /> : <Unchecked />}
                </div>
                <label className={styles.label} htmlFor={optionValue}>
                  {optionLabel}
                </label>
              </label>
              {shouldShowDivider && (
                <div className={styles.divider}>
                  <Dropdown.Divider />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </Dropdown.Menu>
    );
  },
);

CheckboxFilters.displayName = "Menu";
