import { Icon, TIcons } from "@/components/Icon";
import styles from "./styles.module.scss";
import { concatStyles } from "@/utils/concatStyles";
import { SearchInput } from "../SearchInput";
import "../../../Input/variables.scss";

type SelectTriggerProps = {
  prefix?: TIcons;
  disabled?: boolean;
  selectedLabel?: string;
  shouldRenderSearch: boolean;
  searchValue: string;
  onSearchChange: (value: string) => void;
  triggerClassname?: string;
  children: React.ReactNode;
};

export const SelectTrigger = ({
  prefix,
  disabled,
  selectedLabel,
  children,
  shouldRenderSearch,
  searchValue,
  onSearchChange,
  triggerClassname,
}: SelectTriggerProps) => {
  const triggerStyles = concatStyles([
    styles.trigger,
    prefix ? styles.prefix : "",
    disabled ? styles.trigger__disabled : "",
    triggerClassname,
  ]);

  return (
    <div className={triggerStyles}>
      {prefix && <Icon className={styles.prefixIcon} name={prefix} size={2} />}

      {shouldRenderSearch ? (
        <SearchInput
          placeholder={selectedLabel || "Pesquise"}
          value={searchValue}
          onChange={onSearchChange}
        />
      ) : (
        children
      )}

      <Icon className={styles.suffixIcon} name="chevron-down" size={2} />
    </div>
  );
};
