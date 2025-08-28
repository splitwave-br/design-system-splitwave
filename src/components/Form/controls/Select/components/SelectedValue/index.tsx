import { concatStyles } from "@/utils/concatStyles";
import "../../../Input/variables.scss";

import styles from "./styles.module.scss";

interface SelectedValueProps {
  selectedOptionLabel: string | undefined;
  placeholder: string;
  disabled?: boolean;
}

export const SelectedValue = ({
  selectedOptionLabel,
  placeholder,
  disabled,
}: SelectedValueProps) => {
  return (
    <>
      {selectedOptionLabel ? (
        <span
          className={concatStyles([
            styles.selectedValue,
            disabled && styles.selectedValue__disabled,
          ])}
        >
          {selectedOptionLabel}
        </span>
      ) : (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
    </>
  );
};
