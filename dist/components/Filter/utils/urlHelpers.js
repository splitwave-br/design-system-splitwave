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
import qs from "qs";
export function updateURLWithFilters(filters, queryUpdater) {
    var url = new URL(window.location.href);
    // Usa qs para gerar a string de parâmetros de consulta
    var currentParams = qs.parse(url.search, { ignoreQueryPrefix: true });
    // Atualiza os parâmetros com base nos filtros
    var updatedParams = __assign(__assign({}, currentParams), filters);
    // Converte o objeto atualizado de volta para uma query string
    var queryString = qs.stringify(updatedParams, { addQueryPrefix: true });
    if (queryUpdater) {
        queryUpdater("".concat(url.pathname).concat(queryString));
        return;
    }
    window.history.replaceState(null, "", "".concat(url.pathname).concat(queryString));
}
export function getFiltersFromURL() {
    var params = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    // Certifique-se de que os filtros sejam sempre um objeto plano com strings
    return Object.fromEntries(Object.entries(params).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, String(value)];
    }));
}
