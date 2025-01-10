import { useCallback, useEffect } from "react";
import { useQueryParams } from "../../../hooks/useQueryParams";
export function useSyncUrlFilters(_a) {
    var cleanAll = _a.cleanAll, filter = _a.filter, setFilter = _a.setFilter, queryUpdater = _a.queryUpdater;
    var _b = useQueryParams(queryUpdater), getAllParams = _b.getAllParams, setParam = _b.setParam, replaceAllParams = _b.replaceAllParams;
    // Atualiza os filtros a partir da URL
    var updateFilters = useCallback(function () {
        var urlFilters = getAllParams();
        cleanAll();
        Object.entries(urlFilters).forEach(function (_a) {
            var field = _a[0], value = _a[1];
            return setFilter(field, value);
        });
    }, [setFilter, cleanAll, getAllParams]);
    useEffect(function () {
        updateFilters();
    }, [updateFilters]);
    // Atualiza a URL com os filtros atuais
    useEffect(function () {
        replaceAllParams(filter);
    }, [filter, replaceAllParams]);
    // Atualiza os filtros após mudanças na url via botão de voltar e avançar
    useEffect(function () {
        var handlePopState = function () {
            updateFilters();
        };
        window.addEventListener("popstate", handlePopState);
        return function () { return window.removeEventListener("popstate", handlePopState); };
    }, [updateFilters]);
}
