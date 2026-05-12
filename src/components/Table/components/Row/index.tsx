import { useMemo, Fragment } from "react";
import { reorderCells } from "@/components/Table/utils";
import { CheckboxCell } from "@/components/Table/components/Cell/Checkbox";
import { Checkbox } from "@/components/Form/controls/Checkbox";

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

  // Find the Cell.Checkbox anywhere in the row to extract its checkbox props
  const checkboxCellElement = useMemo(() => {
    if (!isMobile) return null;
    return (
      cells.find((cell: React.JSX.Element) => cell?.type === CheckboxCell) ??
      null
    );
  }, [cells, isMobile]);

  return (
    <div className={className} onClick={onClick}>
      {cells.map((cell: React.JSX.Element, index: number) => {
        const isCheckboxCell = cell?.type === CheckboxCell;

        return (
          <Fragment key={`cell-${rowKey}-${index}`}>
            {isMobile && columns[index] && (
              <div className={styles.columnHeader}>
                {/* Checkbox always anchors to the identifier row (index 0) */}
                {index === 0 && checkboxCellElement && (
                  <Checkbox
                    value={checkboxCellElement.props.checked}
                    onChange={checkboxCellElement.props.onChange}
                    disabled={checkboxCellElement.props.disabled}
                    disableHover
                    className={styles.checkboxField}
                  />
                )}
                {columns[index]}
              </div>
            )}
            {isMobile && isCheckboxCell ? (cell.props.children ?? <div />) : cell}
          </Fragment>
        );
      })}
    </div>
  );
};
