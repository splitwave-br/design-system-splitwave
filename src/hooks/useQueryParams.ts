import { useCallback, useMemo } from "react";

export type QueryUpdater = (newPath: string) => void;

export function useQueryParams(queryUpdater: QueryUpdater) {
  const queryParams = useMemo(
    () => new URLSearchParams(window.location.search),
    [window.location.search],
  );

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(queryParams);
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      console.log("setou o param", params);
      queryUpdater(`?${params.toString()}`);
    },
    [queryParams, queryUpdater],
  );

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(queryParams);
      console.log("Removeu o param", params);
      params.delete(key);
      queryUpdater(`?${params.toString()}`);
    },
    [queryParams, queryUpdater],
  );

  const removeParamsByKeys = useCallback(
    (keys: string[]) => {
      const params = new URLSearchParams(queryParams);
      keys.forEach((key) => params.delete(key));
      queryUpdater(`?${params.toString()}`);
    },
    [queryParams, queryUpdater],
  );

  return {
    queryParams,
    setParam,
    removeParam,
    removeParamsByKeys,
  };
}
