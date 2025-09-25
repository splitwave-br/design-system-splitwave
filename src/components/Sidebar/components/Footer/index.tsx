import { concatStyles } from "@/utils/concatStyles";
import React from "react";
import styles from "./styles.module.scss";
import "../../variables.scss"

export interface SidebarFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarFooter = ({ children, className }: SidebarFooterProps) => {
  const footerStyles = concatStyles([styles.footer, className]);

  return <footer className={footerStyles}>{children}</footer>;
};
