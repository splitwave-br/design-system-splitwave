import { concatStyles } from "@/utils/concatStyles";

import styles from "./styles.module.scss";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";

import "../../../Input/variables.scss";

interface SelectedValuesProps {
  selectedOptions: any[] | undefined;
  getLabel: (option: any) => string;
  placeholder: string;
  disabled?: boolean;
  onRemove: (option: any) => void;
}

export const SelectedValues = ({
  selectedOptions,
  placeholder,
  disabled,
  getLabel,
  onRemove,
}: SelectedValuesProps) => {
  const containerStyles = concatStyles([
    styles.container,
    disabled && styles.container__disabled,
  ]);

  return (
    <>
      {selectedOptions && selectedOptions.length > 0 ? (
        <div className={containerStyles}>
          {selectedOptions.map((option, index) => {
            const optionLabel = getLabel(option);

            return (
              <Badge
                key={`multiselect-option-${index}-${optionLabel}`}
                className={styles.option}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(option);
                }}
                variant="gray"
              >
                <span>{optionLabel}</span>
                <Icon size={1} name="x" />
              </Badge>
            );
          })}
        </div>
      ) : (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
    </>
  );
};
