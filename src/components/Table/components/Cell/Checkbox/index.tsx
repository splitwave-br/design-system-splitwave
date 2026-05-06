import { Checkbox } from "@/components/Form/controls/Checkbox";
import { TCell } from "@/components/Table/types";
import styles from "./styles.module.scss";

type TCheckboxCellProps = TCell & {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

export const CheckboxCell = ({
  checked,
  onChange,
  disabled,
  children,
}: TCheckboxCellProps) => {
  return (
    <div className={styles.checkboxCell}>
      <Checkbox value={checked} onChange={onChange} disabled={disabled} disableHover className={styles.checkboxField} />
      {children && <div className={styles.cellContent}>{children}</div>}
    </div>
  );
};
