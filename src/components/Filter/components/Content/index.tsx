import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";

type TContentProps = {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  hasClear?: boolean;
};

export const Content = forwardRef<HTMLDivElement, TContentProps>(
  ({ hasClear = true, children, className, onClose, ...props }, ref) => {
    const { clean } = useFilterContext();
    const { fields } = useFilterFields();

    return (
      <div
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter") {
            onClose?.();
          }
        }}
        className={concatStyles([styles.content, className])}
        {...props}
      >
        {children}
        {hasClear && (
          <span
            onClick={() => {
              clean(fields);
              onClose?.();
            }}
            className={styles.clean}
          >
            Limpar
          </span>
        )}
      </div>
    );
  },
);

Content.displayName = "Menu";
