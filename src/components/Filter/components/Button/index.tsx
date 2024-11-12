"use client";

import { ElementType, ForwardedRef, forwardRef } from "react";
// import { Icon } from '@/components/Icon';
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";
import { Icon } from "@/components/Icon";

type TButton = {
  icon?: ElementType;
  children: React.ReactNode;
  isOpen?: boolean;
};
export const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ icon: IconCustom, children, isOpen, ...props }, ref) => {
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
        {IconCustom ? <IconCustom /> : <Icon name="chevron-down" size={1} />}
      </button>
    );
  },
);
Button.displayName = "Trigger";
