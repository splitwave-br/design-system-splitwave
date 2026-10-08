import { es } from "date-fns/locale";
import type { TDesignSystemMessages } from "../types";

// O `es` do date-fns é o da Espanha, com a semana começando na segunda. No México começa no domingo.
const dateLocale = {
  ...es,
  code: "es-MX",
  options: { ...es.options, weekStartsOn: 0 as const },
};

export const esMX: TDesignSystemMessages = {
  dateLocale,
  pagination: {
    previous: "Anterior",
    next: "Siguiente",
    page: "Página",
    pageOf: (total) => `de ${total}`,
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
