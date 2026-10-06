import { enUS as dateLocale } from "date-fns/locale";
import type { TDesignSystemMessages } from "../types";

export const en: TDesignSystemMessages = {
  dateLocale,
  pagination: {
    previous: "Previous",
    next: "Next",
    page: "Page",
    pageOf: (total) => `of ${total}`,
  },
  filter: {
    title: "Filters",
    clear: "Clear",
    clearAll: "Clear filters",
    back: "Back",
    selectDate: "Select",
  },
  datePicker: { cancel: "Cancel", apply: "Apply" },
  confirmationModal: { cancel: "Cancel" },
  select: {
    placeholder: "Select",
    search: "Search",
    empty: "No items found",
    clear: "Clear",
  },
  input: { placeholder: "Type here" },
  toast: { error: "Error", success: "Success" },
  table: { copy: "Copy" },
};
