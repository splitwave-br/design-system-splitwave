import { ITableData } from "../../../../components/Table/types";
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
};
export declare const Rows: <T extends ITableData>({ keyExtractor, data, renderRow, columns, onRowClick, limit, isLoading, hasPagination, isMobile, }: RowsProps<T>) => import("react/jsx-runtime").JSX.Element | import("react/jsx-runtime").JSX.Element[];
export {};
