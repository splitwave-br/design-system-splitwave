var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useCallback, useMemo } from "react";
import qs from "qs";
export function useQueryParams(queryUpdater) {
    var queryParams = useMemo(function () { return qs.parse(window.location.search, { ignoreQueryPrefix: true }); }, [window.location.search]);
    var getParam = useCallback(function (key) {
        return queryParams[key] || null;
    }, [queryParams]);
    var setParam = useCallback(function (key, value) {
        var _a;
        var newQueryParams = __assign(__assign({}, queryParams), (_a = {}, _a[key] = value, _a));
        var newQuery = qs.stringify(newQueryParams, { addQueryPrefix: true });
        queryUpdater(newQuery);
    }, [queryParams, queryUpdater]);
    var removeParam = useCallback(function (key) {
        var newQueryParams = __assign({}, queryParams);
        delete newQueryParams[key];
        var newQuery = qs.stringify(newQueryParams, { addQueryPrefix: true });
        queryUpdater(newQuery);
    }, [queryParams, queryUpdater]);
    var removeAllParams = useCallback(function () {
        queryUpdater(window.location.pathname);
    }, [queryUpdater]);
    var replaceAllParams = useCallback(function (params) {
        if (Object.keys(params).length === 0) {
            removeAllParams();
            return;
        }
        var newQuery = qs.stringify(params, { addQueryPrefix: true });
        queryUpdater(newQuery);
    }, [queryUpdater, removeAllParams]);
    return {
        queryParams: queryParams,
        getParam: getParam,
        setParam: setParam,
        removeParam: removeParam,
        replaceAllParams: replaceAllParams,
        removeAllParams: removeAllParams,
    };
}
