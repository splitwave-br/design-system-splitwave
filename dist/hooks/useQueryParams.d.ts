import { QueryUpdater } from "../components/Filter/utils/types";
export declare function useQueryParams(queryUpdater?: QueryUpdater): {
    getParam: (key: string) => string | null;
    getAllParams: () => Record<string, string>;
    setParam: (key: string, value: string) => void;
    removeParam: (key: string) => void;
    replaceAllParams: (params: Record<string, string>) => void;
};
