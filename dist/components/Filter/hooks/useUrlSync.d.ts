import { IUseFilterReturn } from "./useFilter";
import { QueryUpdater } from "../utils/types";
type TURLSyncProps = Pick<IUseFilterReturn, "filter" | "setFilter" | "cleanAll"> & {
    queryUpdater?: QueryUpdater;
};
export declare function useURLSync({ cleanAll, filter, setFilter, queryUpdater, }: TURLSyncProps): void;
export {};
