export interface IUsePagination<T> {
    rows?: T[];
}
export declare const usePagination: <T>({ rows }: IUsePagination<T>) => {
    currentPage: number;
    pages: T[][];
    isLoading: boolean;
    totalPages: number;
    onClickNextPage: () => void;
    onClickPrevPage: () => void;
    onClickOnPage: (page: number) => void;
    limit: number;
};
