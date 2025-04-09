import React from "react";
import styles from "./styles.module.scss";
import "./variables.scss";

export interface ModalFooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: ModalFooterProps) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
