import styles from "./styles.module.scss";
// import classnames from 'classnames';
// import { Icon } from '@/components/Icon';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Form/controls/Input";
import { useDebounceValue } from "@/hooks/useDebounceValue";

type TPagination = {
  totalPages: number;
  handlePageInputChange: (page: number) => void;
  handleClickPrevPage: () => void;
  handleClickNextPage: () => void;
  currentPage: number;
};

export const paginationMask = (value: string, totalPages: number): string => {
  const digitsOnly = value.replace(/\D/g, "");

  if (!digitsOnly) return "";

  const numericValue = Number(digitsOnly);

  if (numericValue > totalPages) return String(totalPages);

  return String(numericValue);
};

export const Pagination = ({
  totalPages,
  handlePageInputChange,
  handleClickPrevPage,
  handleClickNextPage,
  currentPage,
}: TPagination) => {
  const isTyping = useRef(false);

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

  const [valueTyped, setValueTyped] = useState("");
  const [inputValue, setInputValue] = useState(String(currentPage + 1));
  const debouncedInput = useDebounceValue(inputValue, { delay: 500 });
  useEffect(() => {
    const page = Number(debouncedInput);
    const isValid = !isNaN(page) && page > 0 && page <= totalPages;

    if (isTyping.current && isValid && page !== currentPage) {
      handlePageInputChange(page);
      isTyping.current = false;
    }
  }, [debouncedInput, currentPage, handlePageInputChange, totalPages]);

  useEffect(() => {
    const next = String(currentPage + 1);
    if (!isTyping.current && inputValue !== next) {
      setInputValue(next);
    }
  }, [currentPage]);

  const handleInputChange = (value: string) => {
    isTyping.current = true;
    const validatedValue = paginationMask(value, totalPages);
    setValueTyped(value);
    setInputValue(validatedValue);
  };

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
        <Input
          size={1}
          placeholder="0"
          onBlur={() => {
            isTyping.current = false;
            setInputValue(String(currentPage + 1));
          }}
          onChange={(e) => handleInputChange(e.target.value)}
          value={inputValue}
        />
        <span>de {pages.length}</span>
        <span>---- valor digitado: {valueTyped}</span>
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
