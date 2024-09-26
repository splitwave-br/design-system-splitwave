import { ReactNode } from "react";
import styles from "./styles.module.scss";

type FieldProps = {
  children: ReactNode;
  className?: string;
};

export function Field({ children, className: _className }: FieldProps) {
  const className = [styles.wrapper, _className].join(" ");

  return <div className={className}>{children}</div>;
}
