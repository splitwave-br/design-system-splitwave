import qs from "qs";

export type QueryUpdater = (newPath: string) => void;
export function updateURLWithFilters(
  filters: Record<string, string | undefined>,
  queryUpdater: QueryUpdater,
) {
  const url = new URL(window.location.href);

  // Usa qs para gerar a string de parâmetros de consulta
  const currentParams = qs.parse(url.search, { ignoreQueryPrefix: true });

  // Remove qualquer campo com valor vazio ou undefined dos filtros
  const cleanedFilters = Object.fromEntries(
    Object.entries(filters).filter(
      ([key, value]) => value != null && value !== "",
    ),
  );

  // Cria um novo objeto de parâmetros, mantendo os existentes da URL, mas removendo os que não estão mais nos filtros
  const updatedParams = { ...currentParams, ...cleanedFilters };

  // Não remove o parâmetro `page`, que é um parâmetro de navegação
  const preservedParams = ["page"];

  // Mantém os parâmetros existentes que não pertencem a filters, como `page`
  Object.keys(currentParams).forEach((key) => {
    if (!(key in cleanedFilters) && !preservedParams.includes(key)) {
      delete updatedParams[key];
    }
  });

  // Converte o objeto atualizado de volta para uma query string
  const queryString = qs.stringify(updatedParams, { addQueryPrefix: true });

  queryUpdater(`${url.pathname}${queryString}`);
}

export function getFiltersFromURL(): Record<string, string> {
  const params = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  // Certifique-se de que os filtros sejam sempre um objeto plano com strings
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  );
}
