import styles from "./styles.module.scss";
import { TTable, ITableData } from "./types";
import { Pagination } from "./components/Pagination";
import { Cell } from "./components/Cell";
import { Header } from "./components/Header";
import { usePagination } from "./hooks/usePagination";
import { useMemo } from "react";
import "./variables.scss";
import { COLUMNS_WIDTH } from "./components/Header/constants";
import useWindowSize from "@/hooks/useWindowSize";
import { Rows } from "./components/Rows";

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
  const LIMIT = pagination?.limit ?? 15;
  const { isMobile } = useWindowSize();
  const staticPagination = usePagination<T>({ rows: data, limit: LIMIT });

  const {
    currentPage,
    pages,
    onClickNextPage,
    onPageInputChange,
    onClickPrevPage,
    totalPages,
    isLoading,
  } = pagination || staticPagination;

  const pageData = useMemo(() => {
    return pages?.[currentPage] || data;
  }, [pages, currentPage, data]);

  const header = useMemo(() => renderHeader(), [renderHeader]);

  const columns = useMemo(() => header?.props?.children || undefined, [header]);

  const gridTemplateColumns = useMemo(() => {
    if (isMobile) return "auto 1fr";
    return columns
      .map((column: React.JSX.Element) => {
        if (!column) {
          return;
        }
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
  }, [columns, isMobile]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.table} style={{ gridTemplateColumns }}>
        {!isMobile && header && <div className={styles.header}>{header}</div>}

        {isEmpty && renderEmptyState && renderEmptyState()}

        <Rows
          hasPagination={!isEmpty && totalPages > 1}
          limit={LIMIT}
          keyExtractor={keyExtractor}
          data={pageData}
          renderRow={renderRow}
          columns={columns}
          onRowClick={onRowClick}
          isLoading={isLoading}
          isMobile={isMobile}
        />
      </div>

      {!isEmpty && totalPages > 1 && (
        <div className={styles.footer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleClickNextPage={!isLoading ? onClickNextPage : () => {}}
            handlePageInputChange={!isLoading ? onPageInputChange : () => {}}
            handleClickPrevPage={!isLoading ? onClickPrevPage : () => {}}
          />
        </div>
      )}
    </div>
  );
};

export { Cell, Header, Pagination };
