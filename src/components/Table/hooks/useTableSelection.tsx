import { ITableData } from "@/components/Table/types";
import { useMemo, useState } from "react";

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

const defaultKeyExtractor = (item: ITableData) => item.id;

export const useTableSelection = <T extends ITableData>({
  items,
  keyExtractor = defaultKeyExtractor,
}: IUseTableSelection<T>): IUseTableSelectionReturn<T> => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const isSelected = (id: string) => selected.has(id);

  const toggleItem = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const isAllSelected = useMemo(
    () => items.length > 0 && items.every((item) => selected.has(keyExtractor(item))),
    [items, selected, keyExtractor],
  );

  const toggleAll = () => {
    if (isAllSelected) {
      clearSelection();
    } else {
      setSelected(new Set(items.map(keyExtractor)));
    }
  };

  const selectedItems = useMemo(
    () => items.filter((item) => selected.has(keyExtractor(item))),
    [items, selected, keyExtractor],
  );

  return {
    selectedItems,
    isSelected,
    toggleItem,
    toggleAll,
    isAllSelected,
    clearSelection,
  };
};
