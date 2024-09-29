import { formatCurrency } from '@/utils/format/formatCurrency';
import { TCell } from '@/components/Table/types';
import styles from './styles.module.scss';

type TProps = TCell & {
  children: number;
  hasHighlight?: boolean;
};

export const Price = ({ children, hasHighlight = false }: TProps) => {
  if (!hasHighlight) {
    return <div className={styles.default}>{formatCurrency(children)}</div>;
  }

  const isPositive = hasHighlight && children >= 0;

  const className = isPositive ? styles.positive : styles.negative;

  return (
    <div className={className}>
      {!isPositive ? '- ' : null}
      {formatCurrency(Math.abs(children))}
    </div>
  );
};
