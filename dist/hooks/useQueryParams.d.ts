export type QueryUpdater = (newPath: string) => void;
export declare function useQueryParams(queryUpdater: QueryUpdater): {
    queryParams: URLSearchParams;
    setParam: (key: string, value: string) => void;
    removeParam: (key: string) => void;
    removeParamsByKeys: (keys: string[]) => void;
};
