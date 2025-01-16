"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { get } from "@/utils/get";
export interface IUseFilterReturn {
  filter: IFilter;
  setFilter: (field: string, value: string) => void;
  applyFilter: (data: any[]) => any[];
  getIsActive: (fields: string[]) => boolean;
  clean: (fields: string[]) => void;
  getValue: (field: string) => string;
  cleanAll: () => void;
}
export interface IFilterProviderProps {
  children: React.ReactNode;
  register: IUseFilterReturn;
}
interface IFilterContextData extends IUseFilterReturn {}

interface IFilter extends Record<string, string> {}

type TUseFilterConfig = {
  normalize?: Record<string, (value: any) => string>;
};
function useFilter(config?: TUseFilterConfig) {
  const [filter, setFilter] = useState<IFilter>({});

  // TODO: We can remove it after implement the filter on the backend

  const applyFilter = useCallback(
    (data: any[]) => {
      if (Object.keys(filter).length === 0) return data;
      return data.filter((item) => {
        return Object.entries(filter).every(([key, value]) => {
          const normalize = config?.normalize && config?.normalize?.[key];
          const itemValue = normalize
            ? normalize(get(item, key))
            : get(item, key);
          const filterValue = normalize ? normalize(value) : value;
          if (!!itemValue) {
            return itemValue.toLowerCase().includes(filterValue.toLowerCase());
          }
          return true;
        });
      });
    },
    [filter],
  );

  const handlesetFilter = useCallback(
    (field: string, value: string) => {
      setFilter((prev) => ({ ...prev, [field]: value }));
    },
    [setFilter],
  );

  const getIsActive = useCallback(
    (fields: string[]) => {
      return fields.some((field) => !!filter[field]);
    },
    [filter],
  );

  const getValue = useCallback((field: string) => filter[field], [filter]);

  const clean = useCallback(
    (fields: string[]) => {
      setFilter((prev) => {
        const newFilter = { ...prev };
        fields.forEach((field) => {
          delete newFilter[field];
        });
        return newFilter;
      });
    },
    [setFilter],
  );

  const cleanAll = useCallback(() => {
    setFilter({});
  }, [setFilter]);

  const normalizedFilter = useMemo(() => {
    const normalized = {} as IFilter;
    Object.entries(filter).forEach(([key, value]) => {
      if (!value) return;
      const normalize = config?.normalize && config?.normalize?.[key];
      normalized[key] = normalize ? normalize(value) : value;
    });
    return normalized;
  }, [filter]);

  // useURLSync({
  //   cleanAll,
  //   filter,
  //   setFilter: handlesetFilter,
  // });

  return {
    filter,
    normalizedFilter,
    setFilter: handlesetFilter,
    applyFilter,
    getIsActive,
    getValue,
    clean,
    cleanAll,
  };
}

const FilterContext = createContext({} as IFilterContextData);

function FilterProvider({ children, register }: IFilterProviderProps) {
  return (
    <FilterContext.Provider value={{ ...register } as IUseFilterReturn}>
      {children}
    </FilterContext.Provider>
  );
}

function useFilterContext(): IFilterContextData {
  return useContext(FilterContext);
}

export { FilterProvider, useFilter, useFilterContext };
