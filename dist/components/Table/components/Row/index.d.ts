type RowProps = {
    rowKey: string;
    row: React.JSX.Element;
    columns: any;
    identifierIndex: number;
    className: string;
    onClick?: () => void;
    isLoading?: boolean;
    isMobile: boolean;
};
export declare const Row: ({ rowKey, row, columns, identifierIndex, className, onClick, isMobile, }: RowProps) => import("react/jsx-runtime").JSX.Element;
export {};
