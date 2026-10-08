import { enUS as dateLocale } from "date-fns/locale";
export var en = {
    dateLocale: dateLocale,
    pagination: {
        previous: "Previous",
        next: "Next",
        page: "Page",
        pageOf: function (total) { return "of ".concat(total); },
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
