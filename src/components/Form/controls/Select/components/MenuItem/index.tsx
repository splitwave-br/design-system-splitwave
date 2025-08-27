import { concatStyles } from "@/utils/concatStyles";
import styles from "./styles.module.scss";

import React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected: boolean;
  className?: string;
}

export const MenuItem = ({
  children,
  className,
  isSelected,
  onClick,
}: MenuItemProps) => {
  const optionStyles = concatStyles([
    styles.option,
    isSelected && styles.option__selected,
    className,
  ]);

  return (
    <div className={optionStyles} onClick={onClick}>
      {children}
    </div>
  );
};
