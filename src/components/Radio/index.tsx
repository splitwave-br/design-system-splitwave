import React from "react";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import "./variants.module.scss";
import { concatStyles } from "@/utils/concatStyles";
import { Icon } from "../Icon";

export type RadioVariant = "default" | "success";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioProps {
  options: RadioOption[];
  value?: string;
  onSelect: (value: string) => void;
  variant?: RadioVariant;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  options,
  value,
  onSelect,
  variant = "default",
  className,
}) => {
  return (
    <div className={styles.radioOptions}>
      {options.map((option, index) => {
        const isSelected = option.value === value;

        const radioClass = concatStyles([
          styles.radioButton,
          isSelected && styles.selected,
          variants[`variant__${variant}`],
        ]);

        return (
          <button
            key={`radio-${option.value}-${index}`}
            type="button"
            className={concatStyles([styles.radioContainer, className])}
            onClick={() => onSelect(option.value)}
          >
            <div className={radioClass}>
              {isSelected && (
                <div className={styles.icon}>
                  <Icon name="checkIcon" size={3} />
                </div>
              )}
            </div>
            <div className={styles.label}>{option.label}</div>
          </button>
        );
      })}
    </div>
  );
};

export default Radio;
