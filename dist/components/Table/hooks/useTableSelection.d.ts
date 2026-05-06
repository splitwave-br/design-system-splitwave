import { ITableData } from "../../../components/Table/types";
export interface IUseTableSelection<T> {
    items: T[];
    keyExtractor?: (item: T) => string;
}
export interface IUseTableSelectionReturn<T> {
    selectedItems: T[];
    isSelected: (id: string) => boolean;
    toggleItem: (id: string) => void;
    toggleAll: () => void;
    isAllSelected: boolean;
    clearSelection: () => void;
}
export declare const useTableSelection: <T extends ITableData>({ items, keyExtractor, }: IUseTableSelection<T>) => IUseTableSelectionReturn<T>;
