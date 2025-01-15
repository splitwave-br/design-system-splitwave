import qs from "qs";
export type QueryUpdater = (newPath: string) => void;
export declare function useQueryParams(queryUpdater: QueryUpdater): {
    queryParams: qs.ParsedQs;
    getParam: (key: string) => string | string[] | qs.ParsedQs | qs.ParsedQs[] | null;
    setParam: (key: string, value: string) => void;
    removeParam: (key: string) => void;
    replaceAllParams: (params: Record<string, string>) => void;
    removeAllParams: () => void;
};
