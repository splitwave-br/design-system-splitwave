import { on } from 'events';
import { useMemo, useState } from 'react';

export interface IUsePagination<T> {
  rows?: T[];
}

const LIMIT = 5;
const FAKE_TIMEOUT = 300; // ms

export const usePagination = <T,>({ rows }: IUsePagination<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pages = useMemo(() => {
    if (!rows) return [];

    const result = Array.from(
      { length: Math.ceil(rows.length / LIMIT) },
      (v, i) => rows.slice(i * LIMIT, i * LIMIT + LIMIT)
    );

    return result as T[][];
  }, [rows]);

  const handleSetCurrentPage = (page: number) => {
    setIsLoading(true);

    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, FAKE_TIMEOUT);;
  }

  const handleClickNextPage = () => {
    if (pages.length === currentPage + 1) return;

    handleSetCurrentPage(currentPage + 1);
  };

  const handleClickPrevPage = () => {
    if(currentPage === 0) return;

    handleSetCurrentPage(currentPage - 1);
  };

  const handleClickOnPage = (page: number) => {
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
