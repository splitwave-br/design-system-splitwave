import { on } from 'events';
import { useMemo, useState } from 'react';

export interface IUsePagination<T> {
  limit: number;
  rows?: T[];
}

const FAKE_TIMEOUT = 300; // ms

export const usePagination = <T,>({ rows, limit }: IUsePagination<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pages = useMemo(() => {
    if (!rows) return [];

    const result = Array.from(
      { length: Math.ceil(rows.length / limit) },
      (v, i) => rows.slice(i * limit, i * limit + limit)
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
  };
};
