import { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = ComponentProps<"label"> & {
  children: ReactNode;
};

export function Label({ children, ...rest }: Props) {
  return (
    <label className={styles.label} {...rest}>
      {children}
    </label>
  );
}
