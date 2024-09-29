export interface ITableData {
  [key: string]: any;
}

export interface IHeaderField<T extends ITableData> {
  field: keyof T;
  alias: string;
}

export type TTable<T extends ITableData> = {
  isEmpty?: boolean;
  data: T[];
  hasHover?: boolean;
  onRowClick?: (item: T) => void;
  keyExtractor?: (item: T, index: number) => string;
  renderHeader: () => React.JSX.Element;
  renderRow: (item: T) => React.JSX.Element;
  renderEmptyState?: () => React.JSX.Element;
  pagination?: {
    isLoading?: boolean;
    currentPage: number;
    pages?: T[][];
    totalPages: number;
    onClickNextPage: () => void;
    onClickOnPage: (page: number) => void;
    onClickPrevPage: () => void;
    limit?: number;
  };
};

export type TCell = {
  size?: string;
};
