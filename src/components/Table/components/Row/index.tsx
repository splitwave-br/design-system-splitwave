import { useMemo, Fragment } from "react";
import { reorderCells } from "@/components/Table/utils";

import styles from "../../styles.module.scss";

type RowProps = {
  rowKey: string;
  row: React.JSX.Element;

  columns: any;

  identifierIndex: number;

  className: string;
  onClick?: () => void;
  isLoading?: boolean;
  isMobile: boolean;
};

export const Row = ({
  rowKey,
  row,
  columns,

  identifierIndex,
  className,
  onClick,

  isMobile,
}: RowProps) => {
  const cells = useMemo(() => {
    const cellsChildren = row.props.children;

    if (isMobile) return reorderCells(cellsChildren, identifierIndex);
    return cellsChildren;
  }, [row]);

  return (
    <div className={className} onClick={onClick}>
      {cells.map((cell: React.JSX.Element, index: number) => (
        <Fragment key={`cell-${rowKey}-${index}`}>
          {isMobile && (
            <div className={styles.columnHeader}>{columns[index]}</div>
          )}
          {cell}
        </Fragment>
      ))}
    </div>
  );
};
