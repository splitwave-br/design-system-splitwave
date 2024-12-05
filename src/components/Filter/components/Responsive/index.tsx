"use client";

import React, { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { Icon } from "@/components/Icon";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterContext } from "../../hooks/useFilter";
import { Button } from "@/components/Button";
import useWindowSize from "@/hooks/useWindowSize";

export type ResponsiveProps = {
  children: React.ReactNode;
  wrapperFiltersClassName?: string;
};

export const Responsive = ({
  children,
  wrapperFiltersClassName,
}: ResponsiveProps) => {
  const { isMobile } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const { filter, getIsActive, cleanAll } = useFilterContext();

  const renderChildren = useMemo(() => {
    return React.Children.map(children, (c) => {
      if (!React.isValidElement(c)) return;

      const child = c as JSX.Element;

      if (isMobile && typeof child.props.shouldEjectOnMobile !== "undefined")
        return null;

      return React.cloneElement(child, {
        shouldEjectOnMobile: true,
        shouldPortal: isMobile ? false : true,
      });
    });
  }, [children, isMobile]);

  const renderNotEjectedChildren = useMemo(() => {
    if (!isMobile) return null;

    return React.Children.map(children, (c) => {
      if (!React.isValidElement(c)) return;

      const child = c as JSX.Element;

      if (child.props.shouldEjectOnMobile !== false) return null;

      return React.cloneElement(child, {
        shouldEjectOnMobile: false,
      });
    });
  }, [children, isMobile]);

  // If children was not ejected on mobile, then we can't active the filter button when these children are actived;
  const notEjectedFields = useMemo(() => {
    const fields: string[] = [];

    if (!isMobile) return [];

    React.Children.forEach(children, (c) => {
      const child = c as JSX.Element;

      if (child.props.shouldEjectOnMobile !== false) return null;

      // If child is not ejected on mobile, then let's map each the childrens of this not ejected children to get the fields;
      React.Children.forEach(child.props.children, (c) => {
        const isField = c?.props?.field;

        if (isField) fields.push(c?.props?.field);
      });
    });

    return fields;
  }, [isMobile, children]);

  const handleGetIsActive = useMemo(() => {
    const filterKeysWithoutNotEjectedFields = Object.keys(filter).filter(
      (key) => !notEjectedFields.includes(key),
    );

    const activeFields = filterKeysWithoutNotEjectedFields.filter((field) =>
      getIsActive([field]),
    );

    return activeFields.length > 0;
  }, [filter, notEjectedFields]);

  return (
    <div className={styles.wrapper}>
      {isMobile && (
        <div>
          <button
            className={concatStyles([
              styles.button,
              handleGetIsActive ? styles.active : "",
            ])}
            onClick={() => setIsOpen(!isOpen)}
          >
            Filtros
            <Icon name="filter" size={1} />
          </button>
        </div>
      )}

      {renderNotEjectedChildren}
      <div
        className={concatStyles([
          styles.wrapperFilters,
          wrapperFiltersClassName,
          isOpen ? styles.wrapperFiltersOpened : "",
        ])}
      >
        <div className={styles.header}>
          <h3>Filtros</h3>
          <button onClick={() => cleanAll()} className={styles.cleanButton}>
            Limpar filtros
          </button>
        </div>
        <div
          className={concatStyles([
            styles.wrapperFiltersContent,
            isOpen ? styles.wrapperFiltersContentOpened : "",
          ])}
        >
          {renderChildren}
        </div>
        <div className={styles.actionsWrapper} onClick={() => setIsOpen(false)}>
          <Button>Voltar</Button>
        </div>
      </div>
    </div>
  );
};
