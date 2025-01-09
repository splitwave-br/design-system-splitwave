import { useEffect } from "react";
import { getFiltersFromURL, updateURLWithFilters } from "../utils/urlHelpers";
export function useURLSync(_a) {
    var cleanAll = _a.cleanAll, filter = _a.filter, setFilter = _a.setFilter, queryUpdater = _a.queryUpdater;
    // Inicializa os filtros a partir da URL
    useEffect(function () {
        var urlFilters = getFiltersFromURL();
        cleanAll(); // Limpa o estado antes de aplicar os novos filtros
        Object.entries(urlFilters).forEach(function (_a) {
            var field = _a[0], value = _a[1];
            return setFilter(field, value);
        });
    }, [setFilter, cleanAll, getFiltersFromURL]);
    // Atualiza a URL com os filtros atuais
    useEffect(function () {
        updateURLWithFilters(filter, queryUpdater);
    }, [filter, updateURLWithFilters]);
    // Reage a mudanças no histórico do navegador
    useEffect(function () {
        var handlePopState = function () {
            var urlFilters = getFiltersFromURL();
            cleanAll();
            Object.entries(urlFilters).forEach(function (_a) {
                var field = _a[0], value = _a[1];
                return setFilter(field, value);
            });
        };
        window.addEventListener("popstate", handlePopState);
        return function () { return window.removeEventListener("popstate", handlePopState); };
    }, [setFilter, cleanAll, getFiltersFromURL]);
}
