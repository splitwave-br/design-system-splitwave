import { TCell } from "@/components/Table/types";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

type TProps = TCell & {
  children: ReactNode;
};

export const Card = ({ children }: TProps) => {
  return <div className={styles.cardWrapper}>
    <div className={styles.content}>
      {children}
    </div>
    </div>;
};


