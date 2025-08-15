import React, { forwardRef, useId, useState } from "react";
import styles from "./styles.module.scss";

import { concatStyles } from "@/utils/concatStyles";
import Checked from "../../../Filter/components/Checkboxes/components/Checked";
import Unchecked from "../../../Filter/components/Checkboxes/components/Unchecked";

export type CheckboxProps = {
  label?: string;
  onChange: () => void;
  value: boolean;
  disabled?: boolean;
  className?: string;
  disableHover?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, onChange, value, className, disabled, disableHover }, ref) => {
    const isChecked = value;
    const randomId = useId();

    const fieldStyles = concatStyles([
      styles.field,
      disableHover ? styles.disableHover : "",
      disabled ? styles.disabled : "",
      className,
    ]);

    return (
      <React.Fragment key={randomId}>
        <div
          onClick={(e) => {
            if (disabled) return;
            e.stopPropagation();
            onChange();
          }}
        >
          <label htmlFor={randomId} className={fieldStyles}>
            <div
              className={concatStyles([
                styles.inputWrapper,
                isChecked ? styles.isChecked : "",
              ])}
            >
              <input
                className={styles.checkbox}
                type="checkbox"
                id={randomId}
                ref={ref}
                disabled={disabled}
                onChange={onChange}
                checked={isChecked}
              />

              {isChecked ? <Checked /> : <Unchecked />}
            </div>
            {label && <span className={styles.label}>{label}</span>}
          </label>
        </div>
      </React.Fragment>
    );
  },
);

Checkbox.displayName = "Checkbox";
