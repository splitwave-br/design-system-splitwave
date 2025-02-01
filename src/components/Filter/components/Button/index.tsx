"use client";

import { ElementType, forwardRef } from "react";
import styles from "./styles.module.scss";
import "./variables.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";
import { Icon } from "@/components/Icon";
import React from "react";
import { Button as BaseButton, ButtonProps } from "@/components/Button";

export interface FilterButtonProps
  extends Omit<ButtonProps, "variant" | "size"> {
  icon?: ElementType;
  children: React.ReactNode;
  isOpen?: boolean;
  fields?: string[];
}

export const Button = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ icon: IconCustom, children, isOpen, fields, ...props }, ref) => {
    const { getIsActive } = useFilterContext();
    const { fields: registeredFields } = useFilterFields();

    return (
      <BaseButton
        {...props}
        variant="tertiary"
        size="medium"
        ref={ref}
        className={concatStyles([
          styles.button,
          getIsActive([...(fields || []), ...registeredFields])
            ? styles.active
            : "",
        ])}
      >
        {children}
        {IconCustom ? <IconCustom /> : <Icon name="chevron-down" size={1} />}
      </BaseButton>
    );
  },
);
Button.displayName = "Trigger";
