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
    // Remove qualquer campo com valor vazio ou undefined dos filtros
    var cleanedFilters = Object.fromEntries(Object.entries(filters).filter(function (_a) {
        var key = _a[0], value = _a[1];
        return value != null && value !== "";
    }));
    // Cria um novo objeto de parâmetros, mantendo os existentes da URL, mas removendo os que não estão mais nos filtros
    var updatedParams = __assign(__assign({}, currentParams), cleanedFilters);
    // Não remove o parâmetro `page`, que é um parâmetro de navegação
    var preservedParams = ["page"];
    // Mantém os parâmetros existentes que não pertencem a filters, como `page`
    Object.keys(currentParams).forEach(function (key) {
        if (!(key in cleanedFilters) && !preservedParams.includes(key)) {
            delete updatedParams[key];
        }
    });
    // Converte o objeto atualizado de volta para uma query string
    var queryString = qs.stringify(updatedParams, { addQueryPrefix: true });
    queryUpdater("".concat(url.pathname).concat(queryString));
}
export function getFiltersFromURL() {
    var params = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    // Certifique-se de que os filtros sejam sempre um objeto plano com strings
    return Object.fromEntries(Object.entries(params).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, String(value)];
    }));
}
