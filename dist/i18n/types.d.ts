import type { Locale } from "date-fns";
export type TDesignSystemMessages = {
    dateLocale: Locale;
    pagination: {
        previous: string;
        next: string;
        page: string;
        pageOf: (total: number) => string;
    };
    filter: {
        title: string;
        clear: string;
        clearAll: string;
        back: string;
        selectDate: string;
    };
    datePicker: {
        cancel: string;
        apply: string;
    };
    confirmationModal: {
        cancel: string;
    };
    select: {
        placeholder: string;
        search: string;
        empty: string;
        clear: string;
    };
    input: {
        placeholder: string;
    };
    toast: {
        error: string;
        success: string;
    };
    table: {
        copy: string;
    };
};
type TMessageSections = Omit<TDesignSystemMessages, "dateLocale">;
export type TDesignSystemMessagesOverride = {
    [K in keyof TMessageSections]?: Partial<TMessageSections[K]>;
};
export {};
