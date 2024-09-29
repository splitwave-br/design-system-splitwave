import styles from "./styles.module.scss";
import { TTable, ITableData } from "./types";
import { Pagination } from "./components/Pagination";
import { Cell } from "./components/Cell";
import { Header } from "./components/Header";
import { usePagination } from "./hooks/usePagination";
import { useMemo, ReactElement, Children } from "react";
import "./variables.scss";
import { COLUMNS_WIDTH } from "./components/Header/constants";
import { concatStyles } from "@/utils/concatStyles";

const LIMIT = 5;

export const Table = <T extends ITableData>({
  data,
  onRowClick,
  isEmpty = false,
  keyExtractor = (item: T) => item.id,
  renderHeader,
  renderRow,
  renderEmptyState,
  pagination,
}: TTable<T>) => {
  const staticPagination = usePagination<T>({ rows: data });

  const {
    currentPage,
    pages,
    onClickNextPage,
    onClickOnPage,
    onClickPrevPage,
    totalPages,
    isLoading,
    limit,
  } = pagination || staticPagination;

  const pageData = useMemo(() => {
    return pages?.[currentPage] || data;
  }, [pages, currentPage, data]);

  const header = useMemo(() => renderHeader(), [renderHeader]);

  const columns = useMemo(() => header.props.children, [header]);

  const gridTemplateColumns = useMemo(() => {
    return columns
      .map((column: React.JSX.Element) => {
        const columnWidth =
          COLUMNS_WIDTH?.[
            column.type?.displayName as keyof typeof COLUMNS_WIDTH
          ];

        const { width, minWidth } = column.props;

        if (width || columnWidth?.width) return width || columnWidth?.width;
        if (minWidth || columnWidth?.minWidth)
          return `minmax(${minWidth || columnWidth?.minWidth}, 1fr)`;

        return "1fr";
      })
      .join(" ");
  }, [columns]);

  const hasClickBehavior = typeof onRowClick === "function";

  const rowClassName = concatStyles([
    styles.row,
    hasClickBehavior ? styles.row_hover : "",
  ]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.table} style={{ gridTemplateColumns }}>
        <div className={styles.header}>{header}</div>

        {isEmpty && renderEmptyState && renderEmptyState()}

        {isLoading &&
          Array.from({ length: limit || LIMIT }).map((_, index) => (
            <div key={index} className={rowClassName}>
              {columns.map(() => (
                <Cell.Skeleton />
              ))}
            </div>
          ))}

        {!isLoading &&
          pageData?.map?.((row, index) => (
            <div
              key={keyExtractor(row, index)}
              className={rowClassName}
              onClick={() => onRowClick?.(row)}
            >
              {renderRow(row)}
            </div>
          ))}
      </div>

      {!isEmpty && totalPages > 1 && (
        <div className={styles.footer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleClickNextPage={!isLoading ? onClickNextPage : () => {}}
            handleClickOnPage={!isLoading ? onClickOnPage : () => {}}
            handleClickPrevPage={!isLoading ? onClickPrevPage : () => {}}
          />
        </div>
      )}
    </div>
  );
};

export { Cell, Header };
