import { concatStyles } from "@/utils/concatStyles";
import { Fragment, useMemo } from "react";

import { Row } from "@/components/Table/components/Row";
import { ITableData } from "@/components/Table/types";
import { getIdentifierIndex, reorderCells } from "@/components/Table/utils";

import styles from "../../styles.module.scss";
import { FakeRows } from "../FakeRows";

type RowsProps<T extends ITableData> = {
  keyExtractor: (item: T, index: number) => string;
  data: T[];

  renderRow: (row: T) => React.JSX.Element;

  columns: React.JSX.Element[];

  onRowClick?: (row: T) => void;

  limit?: number;
  isLoading?: boolean;
  hasPagination?: boolean;

  isMobile: boolean;

  groups?: {
    by: (item: T) => string;
    renderSeparator: (key: string, items: T[]) => React.JSX.Element;
  };
};

export const Rows = <T extends ITableData>({
  keyExtractor,

  data,
  renderRow,

  columns,

  onRowClick,

  limit,
  isLoading,
  hasPagination,

  isMobile,

  groups,
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
    hasPagination ? styles.hasPagination : "",
  ]);

  const groupedData = useMemo(() => {
    if (!groups) return null;

    const map = new Map<string, T[]>();

    data?.forEach((item) => {
      const key = groups.by(item);
      
      if (!map.has(key)) map.set(key, []);

      map.get(key)!.push(item);
    });

    return Array.from(map.entries()).map(([key, items]) => ({ key, items }));
  }, [data, groups]);

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

  if (groupedData) {
    let globalIndex = 0;
    return groupedData.map(({ key, items }) => (
      <Fragment key={key}>
        <div className={styles.groupSeparator}>
          {groups!.renderSeparator(key, items)}
        </div>
        {items.map((row) => {
          const idx = globalIndex++;
          return (
            <Row
              rowKey={keyExtractor(row, idx)}
              key={`row-${keyExtractor(row, idx)}`}
              row={renderRow(row)}
              columns={columnsHeader}
              identifierIndex={identifierIndex}
              className={rowClassName}
              onClick={() => onRowClick?.(row)}
              isMobile={isMobile}
            />
          );
        })}
      </Fragment>
    ));
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
