import { QueryUpdater } from "@/components/Filter/utils/types";
import { useMemo, useCallback } from "react";

export function useQueryParams(queryUpdater?: QueryUpdater) {
  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    [window.location.search],
  );

  // Get all params as a object
  const getAllParams = useCallback(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);

  const getParam = useCallback(
    (key: string) => {
      return searchParams.get(key) || null;
    },
    [searchParams],
  );

  const setParam = useCallback(
    (key: string, value: string) => {
      searchParams.set(key, value);
      const newQuery = searchParams.toString();
      queryUpdater
        ? queryUpdater(newQuery)
        : window.history.replaceState(null, "", `?${newQuery}`);
    },
    [searchParams, queryUpdater],
  );

  const removeParam = useCallback(
    (key: string) => {
      searchParams.delete(key);
      const newQuery = searchParams.toString();
      queryUpdater
        ? queryUpdater(newQuery)
        : window.history.replaceState(null, "", `?${newQuery}`);
    },
    [searchParams, queryUpdater],
  );

  const replaceAllParams = useCallback(
    (params: Record<string, string>) => {
      const newSearchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        newSearchParams.set(key, value);
      });

      const newQuery = newSearchParams.toString();
      queryUpdater
        ? queryUpdater(newQuery)
        : window.history.replaceState(null, "", `?${newQuery}`);
    },
    [queryUpdater],
  );

  return {
    getParam,
    getAllParams,
    setParam,
    removeParam,
    replaceAllParams,
  };
}
