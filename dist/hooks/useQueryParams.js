import { useMemo, useCallback } from "react";
export function useQueryParams(queryUpdater) {
    var searchParams = useMemo(function () { return new URLSearchParams(window.location.search); }, [window.location.search]);
    // Get all params as a object
    var getAllParams = useCallback(function () {
        var params = {};
        searchParams.forEach(function (value, key) {
            params[key] = value;
        });
        return params;
    }, [searchParams]);
    var getParam = useCallback(function (key) {
        return searchParams.get(key) || null;
    }, [searchParams]);
    var setParam = useCallback(function (key, value) {
        searchParams.set(key, value);
        var newQuery = searchParams.toString();
        queryUpdater
            ? queryUpdater(newQuery)
            : window.history.replaceState(null, "", "?".concat(newQuery));
    }, [searchParams, queryUpdater]);
    var removeParam = useCallback(function (key) {
        searchParams.delete(key);
        var newQuery = searchParams.toString();
        queryUpdater
            ? queryUpdater(newQuery)
            : window.history.replaceState(null, "", "?".concat(newQuery));
    }, [searchParams, queryUpdater]);
    var replaceAllParams = useCallback(function (params) {
        var newSearchParams = new URLSearchParams();
        Object.entries(params).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            newSearchParams.set(key, value);
        });
        var newQuery = newSearchParams.toString();
        queryUpdater
            ? queryUpdater(newQuery)
            : window.history.replaceState(null, "", "?".concat(newQuery));
    }, [queryUpdater]);
    return {
        getParam: getParam,
        getAllParams: getAllParams,
        setParam: setParam,
        removeParam: removeParam,
        replaceAllParams: replaceAllParams,
    };
}
