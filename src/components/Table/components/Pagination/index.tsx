import styles from "./styles.module.scss";
// import classnames from 'classnames';
// import { Icon } from '@/components/Icon';
import { useMemo } from "react";
import { Select } from "@/components/Form/controls/Select";
import { Icon } from "@/components/Icon";

type TPagination = {
  totalPages: number;
  handleClickOnPage: (page: number) => void;
  handleClickPrevPage: () => void;
  handleClickNextPage: () => void;
  currentPage: number;
};

export const Pagination = ({
  totalPages,
  handleClickOnPage,
  handleClickPrevPage,
  handleClickNextPage,
  currentPage,
}: TPagination) => {
  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index);
  }, [totalPages]);

  const isPrevDisabled = useMemo(
    () => currentPage === 0 || pages.length === 0,
    [pages, currentPage],
  );

  const isNextDisabled = useMemo(
    () => currentPage === pages.length - 1 || pages.length === 0,
    [pages, currentPage],
  );

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleClickPrevPage}
        className={styles.button}
        disabled={isPrevDisabled}
      >
        <Icon name="arrow-left" size={2} />
        <span>Anterior</span>
      </button>
      <div className={styles.pages}>
        <span>Página</span>
        <Select
          size={1}
          direction="top"
          options={Array.from({ length: totalPages }, (_, index) =>
            String(index + 1),
          )}
          getLabel={(o) => o}
          getValue={(o) => o}
          placeholder="0"
          onChange={(value) => handleClickOnPage(Number(value))}
          value={String(currentPage + 1)}
        />
        <span>de {pages.length}</span>
      </div>
      <button
        className={styles.button}
        onClick={handleClickNextPage}
        disabled={isNextDisabled}
      >
        <span>Próximo</span>
        <Icon name="arrow-right" size={2} />
      </button>
    </div>
  );
};
