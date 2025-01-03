"use client";

import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";

type TContentProps = {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  shouldCloseOnClick?: boolean;
  hasClear?: boolean;
  spacing?: "default" | "sm";
  isEjected?: boolean;
};

export const Content = forwardRef<HTMLDivElement, TContentProps>(
  (
    {
      hasClear = true,
      spacing = "default",
      children,
      shouldCloseOnClick = false,
      className,
      onClose,
      // isEjected,
      ...props
    },
    ref,
  ) => {
    const { clean } = useFilterContext();
    const { fields } = useFilterFields();

    const contentStyles = concatStyles([
      styles.content,
      styles[`spacing__${spacing}`],
      // isEjected ? styles.contentEjected : "",
      className,
    ]);
    return (
      <div
        ref={ref}
        onClick={(e) => {
          shouldCloseOnClick ? onClose?.() : e.stopPropagation();
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter") {
            onClose?.();
          }
        }}
        className={contentStyles}
        {...props}
      >
        {children}
        {hasClear && (
          <span
            onClick={() => {
              clean(fields);
              onClose?.();
            }}
            className={concatStyles([
              styles.clean,
              // isEjected ? styles.cleanEjected : "",
            ])}
          >
            Limpar
          </span>
        )}
      </div>
    );
  },
);

Content.displayName = "Menu";
