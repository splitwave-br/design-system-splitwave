import React from "react";
interface IUseFilterReturn {
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
interface IFilterContextData extends IUseFilterReturn {
}
interface IFilter extends Record<string, string> {
}
type TUseFilterConfig = {
    normalize?: Record<string, (value: any) => string>;
};
declare function useFilter(config?: TUseFilterConfig): {
    filter: IFilter;
    normalizedFilter: IFilter;
    setFilter: (field: string, value: string) => void;
    applyFilter: (data: any[]) => any[];
    getIsActive: (fields: string[]) => boolean;
    getValue: (field: string) => string;
    clean: (fields: string[]) => void;
    cleanAll: () => void;
};
declare function FilterProvider({ children, register }: IFilterProviderProps): import("react/jsx-runtime").JSX.Element;
declare function useFilterContext(): IFilterContextData;
export { FilterProvider, useFilter, useFilterContext };
