import { TCell } from '@/components/Table/types';
import styles from './styles.module.scss';

type TProps = TCell & {
  children: React.ReactNode;
};

// It can be used only inside the Cell component
export const Placeholder = ({ children }: TProps) => {
  return <span className={styles.text}>{children}</span>;
};
