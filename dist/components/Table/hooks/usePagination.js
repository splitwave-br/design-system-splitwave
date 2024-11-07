import { useMemo, useState } from 'react';
var LIMIT = 15;
var FAKE_TIMEOUT = 300; // ms
export var usePagination = function (_a) {
    var rows = _a.rows;
    var _b = useState(0), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var pages = useMemo(function () {
        if (!rows)
            return [];
        var result = Array.from({ length: Math.ceil(rows.length / LIMIT) }, function (v, i) { return rows.slice(i * LIMIT, i * LIMIT + LIMIT); });
        return result;
    }, [rows]);
    var handleSetCurrentPage = function (page) {
        setIsLoading(true);
        setTimeout(function () {
            setCurrentPage(page);
            setIsLoading(false);
        }, FAKE_TIMEOUT);
        ;
    };
    var handleClickNextPage = function () {
        if (pages.length === currentPage + 1)
            return;
        handleSetCurrentPage(currentPage + 1);
    };
    var handleClickPrevPage = function () {
        if (currentPage === 0)
            return;
        handleSetCurrentPage(currentPage - 1);
    };
    var handleClickOnPage = function (page) {
        handleSetCurrentPage(page - 1);
    };
    return {
        currentPage: currentPage,
        pages: pages,
        isLoading: isLoading,
        totalPages: pages.length,
        onClickNextPage: handleClickNextPage,
        onClickPrevPage: handleClickPrevPage,
        onClickOnPage: handleClickOnPage,
        limit: LIMIT
    };
};
