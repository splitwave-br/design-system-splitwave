import { TTable, ITableData } from "./types";
import { Pagination } from "./components/Pagination";
import { Cell } from "./components/Cell";
import { Header } from "./components/Header";
import "./variables.scss";
export declare const Table: <T extends ITableData>({ data, onRowClick, isEmpty, keyExtractor, renderHeader, renderRow, renderEmptyState, pagination, }: TTable<T>) => import("react/jsx-runtime").JSX.Element;
export { Cell, Header, Pagination };
