import { useCallback, useMemo } from "react";
import qs from "qs";

export type QueryUpdater = (newPath: string) => void;

export function useQueryParams(queryUpdater?: QueryUpdater) {
  const queryParams = useMemo(
    () => qs.parse(window.location.search, { ignoreQueryPrefix: true }),
    [window.location.search],
  );

  const getParam = useCallback(
    (key: string) => {
      return queryParams[key] || null;
    },
    [queryParams],
  );

  const setParam = useCallback(
    (key: string, value: string) => {
      const newQueryParams = { ...queryParams, [key]: value };
      const newQuery = qs.stringify(newQueryParams, { addQueryPrefix: true });
      queryUpdater
        ? queryUpdater(newQuery)
        : window.history.replaceState(null, "", newQuery);
    },
    [queryParams, queryUpdater],
  );

  const removeParam = useCallback(
    (key: string) => {
      const newQueryParams = { ...queryParams };
      delete newQueryParams[key];
      const newQuery = qs.stringify(newQueryParams, { addQueryPrefix: true });
      queryUpdater
        ? queryUpdater(newQuery)
        : window.history.replaceState(null, "", newQuery);
    },
    [queryParams, queryUpdater],
  );

  const removeAllParams = useCallback(() => {
    queryUpdater
      ? queryUpdater(window.location.pathname)
      : window.history.replaceState(null, "", window.location.pathname);
  }, [queryUpdater]);

  const replaceAllParams = useCallback(
    (params: Record<string, string>) => {
      if (Object.keys(params).length === 0) {
        removeAllParams();
        return;
      }

      const newQuery = qs.stringify(params, { addQueryPrefix: true });
      queryUpdater
        ? queryUpdater(newQuery)
        : window.history.replaceState(null, "", newQuery);
    },
    [queryUpdater, removeAllParams],
  );

  return {
    queryParams,
    getParam,
    setParam,
    removeParam,
    replaceAllParams,
    removeAllParams,
  };
}
