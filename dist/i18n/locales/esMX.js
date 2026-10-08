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
import { es } from "date-fns/locale";
// O `es` do date-fns é o da Espanha, com a semana começando na segunda. No México começa no domingo.
var dateLocale = __assign(__assign({}, es), { code: "es-MX", options: __assign(__assign({}, es.options), { weekStartsOn: 0 }) });
export var esMX = {
    dateLocale: dateLocale,
    pagination: {
        previous: "Anterior",
        next: "Siguiente",
        page: "Página",
        pageOf: function (total) { return "de ".concat(total); },
    },
    filter: {
        title: "Filtros",
        clear: "Limpiar",
        clearAll: "Limpiar filtros",
        back: "Volver",
        selectDate: "Seleccionar",
    },
    datePicker: { cancel: "Cancelar", apply: "Aplicar" },
    confirmationModal: { cancel: "Cancelar" },
    select: {
        placeholder: "Seleccionar",
        search: "Buscar",
        empty: "No se encontraron resultados",
        clear: "Limpiar",
    },
    input: { placeholder: "Escribe aquí" },
    toast: { error: "Error", success: "Éxito" },
    table: { copy: "Copiar" },
};
