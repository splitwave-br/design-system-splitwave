import { ITableData } from "../../../../components/Table/types";
type RowsProps<T extends ITableData> = {
    limit?: number;
    isMobile: boolean;
    identifierIndex: number;
    columnsHeader: string[];
    className: string;
};
export declare const FakeRows: <T extends ITableData>({ limit, isMobile, identifierIndex, columnsHeader, className, }: RowsProps<T>) => import("react/jsx-runtime").JSX.Element[];
export {};
