import React from "react";
export declare const useFilterFields: () => {
    registerField: (field: string) => void;
    fields: string[];
};
export declare const FilterFieldsProvider: ({ children, }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
