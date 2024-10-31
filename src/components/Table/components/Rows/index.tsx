import { concatStyles } from "@/utils/concatStyles";
import { useMemo } from "react";

import { Row } from "@/components/Table/components/Row";
import { ITableData } from "@/components/Table/types";
import { getIdentifierIndex, reorderCells } from "@/components/Table/utils";

import styles from "../../styles.module.scss";
import { FakeRows } from "../FakeRows";

const LIMIT = 15;

type RowsProps<T extends ITableData> = {
  keyExtractor: (item: T, index: number) => string;
  data: T[];

  renderRow: (row: T) => React.JSX.Element;

  columns: React.JSX.Element[];

  onRowClick?: (row: T) => void;

  limit?: number;
  isLoading?: boolean;

  isMobile: boolean;
};

export const Rows = <T extends ITableData>({
  keyExtractor,

  data,
  renderRow,

  columns,

  onRowClick,

  limit,
  isLoading,

  isMobile,
}: RowsProps<T>) => {
  const identifierIndex = useMemo(() => getIdentifierIndex(columns), [columns]);

  const columnsHeader = useMemo(() => {
    const columnsText = columns.map(
      (column: React.JSX.Element) => column?.props?.children || null,
    );

    if (isMobile) return reorderCells(columnsText, identifierIndex);
    return columnsText;
  }, [columns, isMobile]);

  const hasClickBehavior = typeof onRowClick === "function";

  const rowClassName = concatStyles([
    styles.row,
    hasClickBehavior ? styles.row_hover : "",
  ]);

  if (isLoading) {
    return (
      <FakeRows
        identifierIndex={identifierIndex}
        limit={limit}
        columnsHeader={columnsHeader}
        className={rowClassName}
        isMobile={isMobile}
      />
    );
  }

  return data?.map?.((row, index) => {
    return (
      <Row
        rowKey={keyExtractor(row, index)}
        key={`row-${keyExtractor(row, index)}`}
        row={renderRow(row)}
        columns={columnsHeader}
        identifierIndex={identifierIndex}
        className={rowClassName}
        onClick={() => onRowClick?.(row)}
        isMobile={isMobile}
      />
    );
  });
};
