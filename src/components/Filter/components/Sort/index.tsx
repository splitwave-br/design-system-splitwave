"use client";

import React, { forwardRef, useEffect } from "react";
import { Form } from "@/components/Form";
import { Select as SelectControl } from "@/components/Form/controls/Select";
import { useFilterContext } from "../../hooks/useFilter";
import { Dropdown } from "@/components/Dropdown";
import styles from "./styles.module.scss";
import { Filter } from "../..";
import { concatStyles } from "@/utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";

type TSelect = {
  getLabel: (option: any) => string;
  getValue: (option: any) => string;
  getId?: (option: any) => string;
  field: string;
  label?: string;
  options: any;
  className?: string;
};

export const Sort = forwardRef<HTMLDivElement, TSelect>(
  (
    {
      getLabel,
      getValue: getValueOption,
      getId,
      field,
      label,
      options,
      className,
    },
    ref,
  ) => {
    const { setFilter, getValue } = useFilterContext();
    const { registerField } = useFilterFields();

    const currentValue = getValue(field);

    const handleChange = (option: any) => {
      return setFilter(field, getValueOption(option));
    };

    useEffect(() => {
      registerField(field);
    }, [field, registerField]);

    return (
      <Dropdown.Menu ref={ref}>
        {options.map((option: any, index: number) => {
          const value = getValueOption(option);

          if (option === "divider") {
            return <Dropdown.Divider key={`divider-${index}`} />;
          }

          return (
            <Dropdown.Item
              className={concatStyles([
                value === currentValue ? styles.active : "",
                className,
              ])}
              key={`${value}-${index}`}
              onClick={() => {
                handleChange(option);
              }}
            >
              {getLabel(option)}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    );
  },
);

Sort.displayName = "Menu";
