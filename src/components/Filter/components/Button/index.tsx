import { ForwardedRef, forwardRef } from "react";
// import { Icon } from '@/components/Icon';
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";

type TButton = {
  children: React.ReactNode;
  isOpen?: boolean;
};
export const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ children, isOpen, ...props }, ref) => {
    const { getIsActive } = useFilterContext();
    const { fields } = useFilterFields();

    return (
      <button
        {...props}
        ref={ref}
        className={concatStyles([
          styles.button,
          getIsActive(fields) ? styles.active : "",
        ])}
      >
        {children}
        {/* TODO: Add icon */}
        {/* <Icon name='chevron-down' size={1} /> */}
      </button>
    );
  },
);
Button.displayName = "Trigger";
