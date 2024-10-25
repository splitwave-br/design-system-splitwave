import { TCell } from "@/components/Table/types";
import styles from "./styles.module.scss";

type TProps = TCell & {
  src: string;
};

// It can be used only inside the Cell component
export const Image = ({ src }: TProps) => {
  return <img className={styles.img} src={src} />;
};
