import React, { forwardRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { useFilterFields } from "../../hooks/useFields";
import { Filter } from "../..";
import { Dropdown } from "@/components/Dropdown";
import { Icon } from "@/components/Icon";

type CheckboxFiltersProps = {
  field: string;
  options: any[];
  getLabel: (option: any) => string;
  getValue: (option: any) => string;
  hasClear?: boolean;
};
export const CheckboxFilters = forwardRef<
  HTMLInputElement,
  CheckboxFiltersProps
>(
  (
    { field, hasClear = false, getLabel, getValue: getOptionValue, options },
    ref,
  ) => {
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

    useEffect(() => {
      registerField(field);
    }, []);
    return (
      <Filter.Content spacing="sm" hasClear={hasClear} ref={ref}>
        {options.map((option, index) => {
          const isLastItem = index !== options.length - 1;
          const shouldShowDivider = hasClear ? true : isLastItem;
          const optionValue = getOptionValue(option);
          const optionLabel = getLabel(option);

          return (
            <React.Fragment key={optionValue}>
              <label htmlFor={optionValue} className={styles.field}>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id={optionValue}
                    onChange={() => handleChange(optionValue)}
                    checked={selectedValues.includes(optionValue)}
                  />

                  {!!selectedValues.includes(optionValue) && (
                    <Icon name="checkIcon" />
                  )}
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
      </Filter.Content>
    );
  },
);

CheckboxFilters.displayName = "Menu";
