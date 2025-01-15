import { useQueryParams } from "../../../hooks/useQueryParams";
import { useCallback, useEffect } from "react";
export function useSyncUrlFilters(_a) {
    var cleanAll = _a.cleanAll, filter = _a.filter, setFilter = _a.setFilter, queryUpdater = _a.queryUpdater;
    var _b = useQueryParams(queryUpdater), queryParams = _b.queryParams, replaceAllParams = _b.replaceAllParams;
    // Atualiza os filtros a partir da URL
    var updateFilters = useCallback(function () {
        cleanAll();
        Object.entries(queryParams).forEach(function (_a) {
            var field = _a[0], value = _a[1];
            if (typeof value === "string") {
                setFilter(field, value);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setFilter, cleanAll]);
    useEffect(function () {
        updateFilters();
    }, [updateFilters]);
    // Atualiza a URL com os filtros atuais
    useEffect(function () {
        var validFilters = Object.fromEntries(Object.entries(filter).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value;
        }));
        replaceAllParams(validFilters);
    }, [filter, replaceAllParams]);
}
