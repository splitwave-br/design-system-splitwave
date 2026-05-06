import { Checkbox } from "@/components/Form/controls/Checkbox";
import { Header, HeaderProps } from "@/components/Table/components/Header";
import styles from "./styles.module.scss";

type CheckboxHeaderProps = HeaderProps & {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

export const CheckboxHeader = ({
  checked,
  onChange,
  disabled,
  children,
  ...headerProps
}: CheckboxHeaderProps) => {
  return (
    <Header {...headerProps}>
      <div className={styles.checkboxHeader}>
        <Checkbox value={checked} onChange={onChange} disabled={disabled} disableHover className={styles.checkboxField} />
        {children && <span>{children}</span>}
      </div>
    </Header>
  );
};

CheckboxHeader.displayName = "Checkbox";
