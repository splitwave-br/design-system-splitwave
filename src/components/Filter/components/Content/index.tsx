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
};
export const Content = forwardRef<HTMLDivElement, TContentProps>(
  ({ children, className, onClose, ...props }, ref) => {
    const { clean } = useFilterContext();
    const { fields } = useFilterFields();

    const contentStyles = concatStyles([styles.content, className]);
    return (
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter") {
            onClose?.();
          }
        }}
        className={contentStyles}
        {...props}
      >
        {children}
        <span
          onClick={() => {
            clean(fields);
            onClose?.();
          }}
          className={styles.clean}
        >
          Limpar
        </span>
      </div>
    );
  },
);
Content.displayName = "Menu";
