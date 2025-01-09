import qs from "qs";
import { QueryUpdater } from "./types";

export function updateURLWithFilters(
  filters: Record<string, string | undefined>,
  queryUpdater?: QueryUpdater,
) {
  const url = new URL(window.location.href);

  // Usa qs para gerar a string de parâmetros de consulta
  const currentParams = qs.parse(url.search, { ignoreQueryPrefix: true });

  // Atualiza os parâmetros com base nos filtros
  const updatedParams = { ...currentParams, ...filters };

  // Converte o objeto atualizado de volta para uma query string
  const queryString = qs.stringify(updatedParams, { addQueryPrefix: true });

  if (queryUpdater) {
    queryUpdater(`${url.pathname}${queryString}`);
    return;
  }
  window.history.replaceState(null, "", `${url.pathname}${queryString}`);
}

export function getFiltersFromURL(): Record<string, string> {
  const params = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  // Certifique-se de que os filtros sejam sempre um objeto plano com strings
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  );
}
