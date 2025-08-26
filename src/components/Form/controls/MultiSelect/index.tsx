"use client";

import React, { useMemo } from "react";
import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { concatStyles } from "@/utils/concatStyles";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";
import Unchecked from "@/components/Filter/components/Checkboxes/components/Unchecked";
import Checked from "@/components/Filter/components/Checkboxes/components/Checked";

type TRenderItem = {
  option: any;
  className: string;
  onClick: (option: any) => any;
};

const OPTION_WRAPPER_CLASSES = {
  top: styles.optionsWrapperTop,
  bottom: styles.optionsWrapperBottom,
};

export interface IMultiSelect
  extends React.InputHTMLAttributes<HTMLInputElement> {
  direction?: "top" | "bottom";
  size?: 1 | 2;
  className?: string;
  value?: string[];
  options: any[];
  getLabel: (option: any) => string;
  getValue: (option: any) => string;
  getId?: (option: any) => string;
  renderItem?: (params: TRenderItem) => React.ReactNode;
  onChange?: (value: any) => void;
  // prefix?: TIcons;
  // suffix?: TIcons;
}
export function MultiSelect({
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
}: IMultiSelect) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const [selectedOption, setSelectedOption] = useState<any>(null);
  const [value, setValue] = useState<string[] | undefined>(_value || []);

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return getLabel(option).toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, options, getLabel]);

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
    const currentValue = value || [];

    const isExist = currentValue.find(
      (opt: any) => handleGetValue(opt) === handleGetValue(option),
    );

    if (isExist) {
      const newValue = currentValue.filter(
        (opt: any) => handleGetValue(opt) !== handleGetValue(option),
      );

      setValue(newValue);
      onChange?.(newValue);

      return;
    } else {
      setValue([...currentValue, option]);
      onChange?.([...currentValue, option]);
    }
  };

  // useEffect(() => {
  //   if (handleGetValue(selectedOption) !== value) {
  //     const currentOption = options.find(
  //       (option) => handleGetValue(option) === value,
  //     );
  //     setSelectedOption(currentOption);
  //   }
  // }, [value, options, handleGetValue, selectedOption]);

  const handleOpenOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!props.disabled) setIsOpen((prev) => !prev);
  };

  // useClickOutside()

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

  const renderValueLabel = useMemo(() => {
    const valueLabel = [];
    // const selectedOptionLabel = value ? getLabel(value) : ''

    if (value) {
      value?.forEach((option: any) => {
        let optionLabel = getLabel(option);
        if (optionLabel && optionLabel.length > 24)
          optionLabel = optionLabel.slice(0, 24) + "...";

        valueLabel.push(
          <Badge
            key={`value-${getValue(option)}`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(option);
            }}
          >
            {optionLabel}
            <Icon name="x" size={1} />
          </Badge>,
        );
      });
    }

    if (isOpen) {
      valueLabel.push(
        <input
          className={styles.inputSearch}
          autoFocus
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />,
      );
    }

    if (valueLabel.length) return valueLabel.map((v) => v);

    return <span>{placeholder}</span>;
  }, [value, placeholder, getLabel, getId, handleSelect, isOpen]);

  const handleClickClear = () => {
    onChange?.([]);
    setValue([]);
  };

  return (
    <div className={wrapperClass} onClick={handleOpenOptions}>
      <div className={selectClass}>
        {renderValueLabel}
        {/* <Icon name='chevron-down' size={2} /> */}
        {/* {value ? (
          <span className={selectedValueClass}>{getLabel(value)}</span>
        ) : (
          <span>{placeholder}</span>
        )} */}
      </div>
      {isOpen && (
        <div className={styles.optionsWrapper}>
          {!!filteredOptions.length ? (
            filteredOptions?.map((option: any) => {
              const isSelected = value?.find(
                (opt: any) => getValue(option) === getValue(opt),
              );

              return (
                <span
                  key={getValue(option)}
                  className={concatStyles([
                    styles.option,
                    isSelected && styles.optionSelected,
                  ])}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(option);
                  }}
                >
                  {isSelected ? <Checked /> : <Unchecked />}
                  {getLabel(option)}
                </span>
              );
            })
          ) : (
            <span className={styles["empty-options"]}>
              Nenhum item encontrado
            </span>
          )}

          {!!value?.length && (
            <span onClick={handleClickClear} className={styles.cleanButton}>
              Limpar
            </span>
          )}
        </div>
      )}
      {/* {isOpen && (
        <div className={optionWrapperClass}>
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
      )} */}
    </div>
  );
}
