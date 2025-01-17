import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import "./variables.scss";
import { useDropdown } from "../hooks/useDropdown";

interface Item extends ButtonHTMLAttributes<HTMLButtonElement> {
  shouldCloseOnClick?: boolean;
}

const Item = ({
  className,
  shouldCloseOnClick = false,
  onClick,
  ...props
}: Item) => {
  const { setIsOpen } = useDropdown();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldCloseOnClick) setIsOpen(false);
    onClick?.(event);
  };
  const itemStyles = [styles.item, className].join(" ");
  return <button onClick={handleClick} className={itemStyles} {...props} />;
};

export default Item;
