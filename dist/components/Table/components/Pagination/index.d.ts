type TPagination = {
    totalPages: number;
    handleClickOnPage: (page: number) => void;
    handleClickPrevPage: () => void;
    handleClickNextPage: () => void;
    currentPage: number;
};
export declare const Pagination: ({ totalPages, handleClickOnPage, handleClickPrevPage, handleClickNextPage, currentPage, }: TPagination) => import("react/jsx-runtime").JSX.Element;
export {};
