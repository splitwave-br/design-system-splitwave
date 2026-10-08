import { ptBR as dateLocale } from "date-fns/locale";
import type { TDesignSystemMessages } from "../types";

export const ptBR: TDesignSystemMessages = {
  dateLocale,
  pagination: {
    previous: "Anterior",
    next: "Próximo",
    page: "Página",
    pageOf: (total) => `de ${total}`,
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
