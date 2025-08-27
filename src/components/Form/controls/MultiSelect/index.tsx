"use client";

import React, { useMemo, useRef } from "react";
import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { concatStyles } from "@/utils/concatStyles";
import Unchecked from "@/components/Filter/components/Checkboxes/components/Unchecked";
import Checked from "@/components/Filter/components/Checkboxes/components/Checked";
import { SelectTrigger } from "../Select/components/Trigger";
import { SelectedValues } from "./components/SelectedValues";
import { SelectMenu } from "../Select/components/Menu";
import { useFloatingElement } from "@/hooks/useFloatingElement/hooks";
import { useClickOutside } from "@/hooks/useClickOutside";
import { MenuItem } from "../Select/components/MenuItem";
import { MultiSelectProps } from "./types";

export function MultiSelect<T>({
  getLabel,
  getValue,
  onChange,
  renderItem,
  onRemove,
  size = 2,
  className,
  options,
  placeholder = "Selecione",
  disableDeselect = false,
  disabled,
  hasClear = true,
  asPortal = false,
  value,
  ...props
}: MultiSelectProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

  const { animationDirection } = useFloatingElement({
    triggerRef: containerRef,
    elementRef: menuRef,
    isEnabled: isOpen && asPortal,
  });

  useClickOutside({
    callback: () => setIsOpen(false),
    isActive: isOpen,
    ref: containerRef,
    exceptionRef: menuRef,
  });

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      return getLabel(option).toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, options, getLabel]);

  const handleGetValue = useCallback(
    (option: T) => {
      if (!option) return "";
      const value = getValue?.(option);
      if (typeof value === "undefined") return option;
      return value;
    },
    [getValue],
  );

  const handleRemoveItem = (option: T) => {
    const currentSelectedOptions = selectedOptions || [];

    const optionValue = handleGetValue(option);
    const newValue = currentSelectedOptions.filter(
      (opt: any) => handleGetValue(opt) !== handleGetValue(option),
    );

    setSelectedOptions(newValue);
    return onRemove?.(optionValue);
  };

  const handleSelect = (option: T) => {
    const currentSelectedOptions = selectedOptions || [];

    const optionValue = handleGetValue(option);

    const hasBeenAdded = currentSelectedOptions.find(
      (option) => handleGetValue(option) === optionValue,
    );

    if (hasBeenAdded && !disableDeselect) {
      return handleRemoveItem(option);
    }

    setSelectedOptions([...currentSelectedOptions, option]);
    onChange?.(optionValue);
  };

  const handleGetIsSelected = useCallback(
    (option: T) => selectedOptions?.includes(option),
    [selectedOptions],
  );

  const handleClickClear = () => {
    onChange?.([]);
    setSelectedOptions([]);
  };

  const handleFirstRender = useCallback(() => {
    if (!value) return;

    const matchedOptions = options?.filter((option) =>
      value.some((selectedOption) => getValue(option) === selectedOption),
    );

    if (!matchedOptions || matchedOptions === selectedOptions) return;

    setSelectedOptions(matchedOptions);
  }, [value, options, getValue]);

  useEffect(handleFirstRender, [handleFirstRender]);

  const handleToggleOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const wrapperClass = concatStyles([styles.wrapper, className]);

  const shouldRenderClearButton = hasClear && selectedOptions.length > 0;

  return (
    <div
      ref={containerRef}
      className={wrapperClass}
      onClick={handleToggleOptions}
    >
      <SelectTrigger
        triggerClassname={selectedOptions.length > 0 ? styles.trigger : ""}
        disabled={disabled}
        shouldRenderSearch={false}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <SelectedValues
          getLabel={getLabel}
          onRemove={handleRemoveItem}
          placeholder={placeholder}
          selectedOptions={selectedOptions}
          disabled={disabled}
        />
      </SelectTrigger>

      {isOpen && (
        <SelectMenu
          ref={menuRef}
          options={filteredOptions}
          onChange={handleSelect}
          getLabel={getLabel}
          getValue={getValue}
          handleGetIsSelected={handleGetIsSelected}
          animationDirection={animationDirection}
          asPortal={asPortal}
          disabled={disabled}
          renderItem={({ option, isSelected, onClick }) => {
            if (renderItem) return renderItem({ option, isSelected, onClick });

            return (
              <MenuItem
                isSelected={isSelected}
                onClick={onClick}
                key={getValue(option)}
              >
                {isSelected ? <Checked /> : <Unchecked />}
                {getLabel(option)}
              </MenuItem>
            );
          }}
          {...props}
        >
          {shouldRenderClearButton && (
            <span onClick={handleClickClear} className={styles.cleanButton}>
              Limpar
            </span>
          )}
        </SelectMenu>
      )}
    </div>
  );
}
