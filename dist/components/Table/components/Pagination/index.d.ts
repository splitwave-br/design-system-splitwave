type TPagination = {
    totalPages: number;
    handlePageInputChange: (page: number) => void;
    handleClickPrevPage: () => void;
    handleClickNextPage: () => void;
    currentPage: number;
};
export declare const paginationMask: (value: string, totalPages: number) => string;
export declare const Pagination: ({ totalPages, handlePageInputChange, handleClickPrevPage, handleClickNextPage, currentPage, }: TPagination) => import("react/jsx-runtime").JSX.Element;
export {};
