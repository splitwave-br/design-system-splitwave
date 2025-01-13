import { useCallback, useEffect } from "react";

import { QueryUpdater, useQueryParams } from "@/hooks/useQueryParams";
import { IUseFilterReturn } from "./useFilter";

type TURLSyncProps = Pick<
  IUseFilterReturn,
  "filter" | "setFilter" | "cleanAll"
> & {
  queryUpdater?: QueryUpdater;
};

export function useSyncUrlFilters({
  cleanAll,
  filter,
  setFilter,
  queryUpdater,
}: TURLSyncProps) {
  const { queryParams, replaceAllParams } = useQueryParams(queryUpdater);

  // Atualiza os filtros a partir da URL
  const updateFilters = useCallback(() => {
    cleanAll();
    Object.entries(queryParams).forEach(([field, value]) => {
      if (typeof value === "string") {
        setFilter(field, value);
      }
    });
  }, [setFilter, cleanAll, queryParams]);

  useEffect(() => {
    updateFilters();
  }, [updateFilters]);

  // Atualiza a URL com os filtros atuais
  useEffect(() => {
    const validFilters = Object.fromEntries(
      Object.entries(filter).filter(([_, value]) => value),
    );

    replaceAllParams(validFilters);
  }, [filter, replaceAllParams]);

  // Atualiza os filtros após mudanças na url via botão de voltar e avançar
  useEffect(() => {
    const handlePopState = () => {
      updateFilters();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [updateFilters]);
}
