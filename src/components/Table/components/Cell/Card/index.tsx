import { TCell } from "@/components/Table/types";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

type TProps = TCell & {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: TProps) => {
  return (
    <div className={styles.cell}>
      <div className={[styles.cardWrapper, className].join(" ")}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>);
};
