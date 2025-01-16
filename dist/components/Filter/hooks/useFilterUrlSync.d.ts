import { IUseFilterReturn } from "./useFilter";
import { QueryUpdater } from "../../../hooks/useQueryParams";
type TURLSyncProps = Pick<IUseFilterReturn, "filter" | "setFilter" | "cleanAll"> & {
    queryUpdater?: QueryUpdater;
};
export declare function useFilterURLSync({ cleanAll, filter, setFilter, queryUpdater, }: TURLSyncProps): void;
export {};
