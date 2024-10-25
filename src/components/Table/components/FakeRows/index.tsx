import { Row } from "@/components/Table/components/Row";
import { ITableData } from "@/components/Table/types";

import { Cell } from "../Cell";

const LIMIT = 15;

type RowsProps<T extends ITableData> = {
  limit?: number;

  isMobile: boolean;

  identifierIndex: number;
  columnsHeader: string[];
  className: string;
};

export const FakeRows = <T extends ITableData>({
  limit,

  isMobile,

  identifierIndex,
  columnsHeader,
  className,
}: RowsProps<T>) => {
  return Array.from({ length: limit || LIMIT }).map((_, index) => (
    <Row
      rowKey={`skeleton-${index}`}
      key={`row-skeleton-${index}`}
      row={
        <>
          {columnsHeader.map(() => (
            <Cell.Skeleton />
          ))}
        </>
      }
      columns={columnsHeader}
      identifierIndex={identifierIndex}
      className={className}
      isMobile={isMobile}
    />
  ));
};
