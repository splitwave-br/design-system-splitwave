import { useEffect } from "react";
import { IUseFilterReturn } from "./useFilter";
import { QueryUpdater } from "@/hooks/useQueryParams";
import { getFiltersFromURL, updateURLWithFilters } from "../utils/urlHelpers";

type TURLSyncProps = Pick<
  IUseFilterReturn,
  "filter" | "setFilter" | "cleanAll"
> & {
  queryUpdater?: QueryUpdater;
};

export function useFilterURLSync({
  cleanAll,
  filter,
  setFilter,
  queryUpdater,
}: TURLSyncProps) {
  // Inicializa os filtros a partir da URL
  useEffect(() => {
    const urlFilters = getFiltersFromURL();

    cleanAll(); // Limpa o estado antes de aplicar os novos filtros

    Object.entries(urlFilters).forEach(([field, value]) =>
      setFilter(field, value),
    );
  }, [setFilter, cleanAll, getFiltersFromURL]);

  // Atualiza a URL com os filtros atuais
  useEffect(() => {
    updateURLWithFilters(filter, queryUpdater);
  }, [filter, updateURLWithFilters]);

  // Reage a mudanças no histórico do navegador
  useEffect(() => {
    const handlePopState = () => {
      const urlFilters = getFiltersFromURL();
      cleanAll();
      Object.entries(urlFilters).forEach(([field, value]) =>
        setFilter(field, value),
      );
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setFilter, cleanAll, getFiltersFromURL]);
}
