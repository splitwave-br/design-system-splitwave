import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Date } from "./Date";
import { Uuid } from "./Uuid";
import { Action } from "./Action";

export type HeaderProps = {
  children?: ReactNode;
  isFixed?: boolean;

  // Use this prop to set the width of the grid column
  minWidth?: string;
  width?: string;
};

export const Header = ({ children, isFixed }: HeaderProps) => {
  const className = [styles.header, isFixed ? styles.isFixed : ""].join(" ");

  return <div className={className}>{children}</div>;
};

Header.Date = Date;
Header.Uuid = Uuid;
Header.Action = Action;