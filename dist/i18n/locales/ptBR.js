import { ptBR as dateLocale } from "date-fns/locale";
export var ptBR = {
    dateLocale: dateLocale,
    pagination: {
        previous: "Anterior",
        next: "Próximo",
        page: "Página",
        pageOf: function (total) { return "de ".concat(total); },
    },
    filter: {
        title: "Filtros",
        clear: "Limpar",
        clearAll: "Limpar filtros",
        back: "Voltar",
        selectDate: "Selecione",
    },
    datePicker: { cancel: "Cancelar", apply: "Aplicar" },
    confirmationModal: { cancel: "Cancelar" },
    select: {
        placeholder: "Selecione",
        search: "Pesquise",
        empty: "Nenhum item encontrado",
        clear: "Limpar",
    },
    input: { placeholder: "Digite" },
    toast: { error: "Erro", success: "Sucesso" },
    table: { copy: "Copiar" },
};
