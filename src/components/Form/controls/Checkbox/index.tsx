import React, { forwardRef, useState } from "react";
import styles from "./styles.module.scss";

import { concatStyles } from "@/utils/concatStyles";
import Checked from "../../../Filter/components/Checkboxes/components/Checked";
import Unchecked from "../../../Filter/components/Checkboxes/components/Unchecked";


type CheckboxProps = {
  label?: string;
  onChange: () => void;
  value: boolean
};

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    { label, onChange, value },
    ref,
  ) => {
const isChecked = value 

    return (
      <React.Fragment key={label}>
        <div onClick={(e) => {
          e.stopPropagation()
          onChange()
        } }>
        <label htmlFor={label} className={styles.field}>
          <div
            className={concatStyles([
              styles.inputWrapper,
              isChecked ? styles.isChecked : '',
            ])}
          >
            <input
              className={styles.checkbox}
              type="checkbox"
              id={label}
              ref={ref}
              onChange={onChange}
              checked={isChecked}
            />

            {isChecked ? <Checked /> : <Unchecked />}
          </div>
          {label && <span className={styles.label}>{label}</span> }
        </label>
        </div>
      </React.Fragment>
    );
  }
);

Checkbox.displayName = 'Checkbox';
