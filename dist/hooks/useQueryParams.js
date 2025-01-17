import { useCallback, useMemo } from "react";
export function useQueryParams(queryUpdater) {
    var queryParams = useMemo(function () { return new URLSearchParams(window.location.search); }, [window.location.search]);
    var setParam = useCallback(function (key, value) {
        var params = new URLSearchParams(queryParams);
        if (value) {
            params.set(key, value);
        }
        else {
            params.delete(key);
        }
        console.log("setou o param", params);
        queryUpdater("?".concat(params.toString()));
    }, [queryParams, queryUpdater]);
    var removeParam = useCallback(function (key) {
        var params = new URLSearchParams(queryParams);
        console.log("Removeu o param", params);
        params.delete(key);
        queryUpdater("?".concat(params.toString()));
    }, [queryParams, queryUpdater]);
    var removeParamsByKeys = useCallback(function (keys) {
        var params = new URLSearchParams(queryParams);
        keys.forEach(function (key) { return params.delete(key); });
        queryUpdater("?".concat(params.toString()));
    }, [queryParams, queryUpdater]);
    return {
        queryParams: queryParams,
        setParam: setParam,
        removeParam: removeParam,
        removeParamsByKeys: removeParamsByKeys,
    };
}
