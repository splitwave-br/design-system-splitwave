type TField = {
    field: string;
    label?: string;
    mask?: (value: string) => string;
};
export declare const Field: ({ field, label, mask }: TField) => import("react/jsx-runtime").JSX.Element;
export {};
