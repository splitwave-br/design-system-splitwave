"use client";

import { Children, ElementType, forwardRef, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { useFilterContext } from "../../hooks/useFilter";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";
import { Icon } from "@/components/Icon";
import React from "react";
import { DATE_FIELDS } from "../../constants/dateFilter";

type TButton = {
  icon?: ElementType;
  children: React.ReactNode;
  isOpen?: boolean;
  fields?: string[];
};
export const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ icon: IconCustom, children, isOpen, fields, ...props }, ref) => {
    const { getIsActive } = useFilterContext();
    const { fields: registeredFields } = useFilterFields();

    return (
      <button
        {...props}
        ref={ref}
        className={concatStyles([
          styles.button,
          getIsActive([...(fields || []), ...registeredFields, ...DATE_FIELDS])
            ? styles.active
            : "",
        ])}
      >
        {children}
        {IconCustom ? <IconCustom /> : <Icon name="chevron-down" size={1} />}
      </button>
    );
  },
);
Button.displayName = "Trigger";
