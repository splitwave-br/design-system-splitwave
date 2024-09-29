"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
const react_1 = require("react");
const LIMIT = 5;
const FAKE_TIMEOUT = 300; // ms
const usePagination = ({ rows }) => {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(0);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const pages = (0, react_1.useMemo)(() => {
        if (!rows)
            return [];
        const result = Array.from({ length: Math.ceil(rows.length / LIMIT) }, (v, i) => rows.slice(i * LIMIT, i * LIMIT + LIMIT));
        return result;
    }, [rows]);
    const handleSetCurrentPage = (page) => {
        setIsLoading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setIsLoading(false);
        }, FAKE_TIMEOUT);
        ;
    };
    const handleClickNextPage = () => {
        if (pages.length === currentPage + 1)
            return;
        handleSetCurrentPage(currentPage + 1);
    };
    const handleClickPrevPage = () => {
        if (currentPage === 0)
            return;
        handleSetCurrentPage(currentPage - 1);
    };
    const handleClickOnPage = (page) => {
        handleSetCurrentPage(page - 1);
    };
    return {
        currentPage,
        pages,
        isLoading,
        totalPages: pages.length,
        onClickNextPage: handleClickNextPage,
        onClickPrevPage: handleClickPrevPage,
        onClickOnPage: handleClickOnPage,
        limit: LIMIT
    };
};
exports.usePagination = usePagination;
