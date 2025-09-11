import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import { concatStyles } from "@/utils/concatStyles";
import { Icon } from "@/components/Icon";
import { RadioProps } from "./types";


export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, label, value, checked = false, onSelect, variant = "default", className,  }, ref) => {
    const radioClass = concatStyles([
      styles.radioButton,
      checked && styles.selected,
      variants[`variant__${variant}`],
    ]);

    return (
      <label htmlFor={id} className={concatStyles([styles.radioContainer, className])}>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={() => onSelect(value)}
          ref={ref} 
          className={styles.radioInput}
        />
        <div className={radioClass} aria-hidden="true">
          {checked && (
            <div className={styles.icon}>
              <Icon name="checkIcon" />
            </div>
          )}
        </div>
        <span className={styles.label}>{label}</span>
      </label>
    );
  }
);

Radio.displayName = "RadioInput";
