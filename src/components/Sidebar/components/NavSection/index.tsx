import React from "react";
import styles from "./styles.module.scss";
import { concatStyles } from "@/utils/concatStyles";

export interface NavSectionProps {
  children: React.ReactNode;
  disableBottomBorder?: boolean;
  
}

export const NavSection = ({ children, disableBottomBorder }: NavSectionProps) => {
  const containerStyles = concatStyles([
    styles.container,
    disableBottomBorder && styles.disableBottomBorder,
  ]);

  return <div className={containerStyles}>{children}</div>;
};
