import { QueryUpdater } from "../../../hooks/useQueryParams";
import { IUseFilterReturn } from "./useFilter";
type TURLSyncProps = Pick<IUseFilterReturn, "filter" | "setFilter" | "cleanAll"> & {
    queryUpdater: QueryUpdater;
};
export declare function useSyncUrlFilters({ cleanAll, filter, setFilter, queryUpdater, }: TURLSyncProps): void;
export {};
