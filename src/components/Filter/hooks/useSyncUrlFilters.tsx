import { useCallback, useEffect } from "react";
import { IUseFilterReturn } from "./useFilter";
import { QueryUpdater } from "../utils/types";
import { useQueryParams } from "@/hooks/useQueryParams";

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
  const { getAllParams, setParam, replaceAllParams } =
    useQueryParams(queryUpdater);

  // Atualiza os filtros a partir da URL
  const updateFilters = useCallback(() => {
    const urlFilters = getAllParams();
    cleanAll();

    Object.entries(urlFilters).forEach(([field, value]) =>
      setFilter(field, value),
    );
  }, [setFilter, cleanAll, getAllParams]);

  useEffect(() => {
    updateFilters();
  }, [updateFilters]);

  // Atualiza a URL com os filtros atuais
  useEffect(() => {
    replaceAllParams(filter);
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
