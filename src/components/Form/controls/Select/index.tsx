"use client";

import React from "react";
// import { Icon, TIcons } from '@/components/Icon';
import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import "../Input/variables.scss";
import { concatStyles } from "@/utils/concatStyles";
import { Icon } from "@/components/Icon";

type TRenderItem = {
  option: any;
  className: string;
  onClick: (option: any) => any;
};

const OPTION_WRAPPER_CLASSES = {
  top: styles.optionsWrapperTop,
  bottom: styles.optionsWrapperBottom,
};

export interface ISelect extends React.InputHTMLAttributes<HTMLInputElement> {
  direction?: "top" | "bottom";
  size?: 1 | 2;
  className?: string;
  value?: string;
  options: any[];
  getLabel: (option: any) => string;
  getValue: (option: any) => string;
  getId?: (option: any) => string;
  renderItem?: (params: TRenderItem) => React.ReactNode;

  // prefix?: TIcons;
  // suffix?: TIcons;
}
export function Select({
  size = 2,
  direction = "bottom",
  className,
  // suffix,
  options,
  getLabel,
  getValue,
  getId,
  placeholder = "Selecione",
  onChange,
  renderItem,
  value: _value,
  ...props
}: ISelect) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [value, setValue] = useState<string | undefined>(_value);

  // Need to set the value when the prop changes to control the value by the parent
  useEffect(() => {
    if (_value) {
      setValue(_value);
    }
  }, [_value]);

  const handleGetValue = useCallback(
    (option: any) => {
      if (!option) return "";
      const value = getValue?.(option);
      if (typeof value === "undefined") return option;
      return value;
    },
    [getValue],
  );

  const handleSelect = (option: any) => {
    if (handleGetValue(option) === handleGetValue(selectedOption)) {
      onChange?.("" as any);
      setValue("");
    } else {
      onChange?.(option);
      setValue(handleGetValue(option));
    }
  };

  useEffect(() => {
    if (handleGetValue(selectedOption) !== value) {
      const currentOption = options.find(
        (option) => handleGetValue(option) === value,
      );
      setSelectedOption(currentOption);
    }
  }, [value, options, handleGetValue, selectedOption]);

  const handleOpenOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!props.disabled) setIsOpen((prev) => !prev);
  };

  const handleClickWindow = useCallback(() => {
    setIsOpen(false);
    document.removeEventListener("click", handleClickWindow);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickWindow);
    } else {
      document.removeEventListener("click", handleClickWindow);
    }
  }, [isOpen, handleClickWindow]);

  const isDisabled = props.disabled;
  const wrapperClass = [
    styles.wrapper,
    className ? className : "",
    isOpen ? styles["wrapper-opened"] : "",
    isDisabled && styles.disabled,
  ].join(" ");

  const selectClass = [
    styles.select,
    isDisabled && styles.disabled,
    styles[`select-size-${size}`],
  ].join(" ");

  const selectedValueClass = [
    styles.selected_value,
    isDisabled && styles.disabled,
  ].join(" ");

  const optionWrapperClass = OPTION_WRAPPER_CLASSES[direction];

  return (
    <div className={wrapperClass} onClick={handleOpenOptions}>
      <div className={selectClass}>
        <Icon name='chevron-down' size={2} />
        {selectedOption ? (
          <span className={selectedValueClass}>{getLabel(selectedOption)}</span>
        ) : (
          <span>{placeholder}</span>
        )}
      </div>
      {isOpen && (
        <div className={optionWrapperClass}>
          <div className={styles.scrollContainer}>
            {!!options.length ? (
              options.map((option: any) => {
                const isSelected =
                  handleGetValue(option) === handleGetValue(selectedOption);
                const className = concatStyles([
                  styles.option,
                  isSelected && styles.optionSelected,
                ]);
                const onClick = () => handleSelect(option);

                const id = getId?.(option);
                const value = getValue?.(option);

                const key = id ? id : value;

                return renderItem ? (
                  renderItem({ option, className, onClick })
                ) : (
                  <span key={key} className={className} onClick={onClick}>
                    {getLabel(option)}
                  </span>
                );
              })
            ) : (
              <span className={styles["empty-options"]}>
                Nenhum item encontrado
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
