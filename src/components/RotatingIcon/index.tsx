import { concatStyles } from "@/utils/concatStyles";
import { useDropdown } from "../Dropdown/hooks/useDropdown";
import { Icon, TIcon } from "@/components/Icon";
import styles from "./styles.module.scss";

export interface RotatingIconProps extends Partial<TIcon> {
  isOpen: boolean;
}

export const RotatingIcon = ({
  name = "chevron-down",
  className,
  ...props
}: RotatingIconProps) => {
  const { isOpen } = useDropdown();

  const iconStyles = concatStyles([
    styles.icon,
    isOpen ? styles.isOpen : "",
    className,
  ]);

  return <Icon name={name} className={iconStyles} {...props} />;
};
