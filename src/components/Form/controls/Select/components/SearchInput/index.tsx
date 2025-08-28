import "../../../Input/variables.scss";
import styles from "./styles.module.scss";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <input
      className={styles.searchInput}
      placeholder={placeholder}
      autoFocus
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
