export interface IUsePagination<T> {
    limit: number;
    rows?: T[];
}
export declare const usePagination: <T>({ rows, limit }: IUsePagination<T>) => {
    currentPage: number;
    pages: T[][];
    isLoading: boolean;
    totalPages: number;
    onClickNextPage: () => void;
    onClickPrevPage: () => void;
    onClickOnPage: (page: number) => void;
};
