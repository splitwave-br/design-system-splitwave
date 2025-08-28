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
  keyExtractor,
  size = 2,
  className,
  options,
  placeholder = "Selecione",
  disableDeselect = false,
  disabled,
  hasClear = true,
  asPortal = false,
  value = [],
  ...props
}: MultiSelectProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { animationDirection } = useFloatingElement({
    triggerRef: containerRef,
    elementRef: menuRef,
    isEnabled: isOpen,
    asPortal,
  });

  useClickOutside({
    callback: () => setIsOpen(false),
    isActive: isOpen,
    ref: containerRef,
    exceptionRef: menuRef,
  });

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      getLabel(option).toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [searchValue, options, getLabel]);

  const handleRemoveItem = (option: T) => {
    const optionValue = getValue(option);

    onRemove?.(optionValue);
  };

  const handleSelect = (option: T) => {
    const optionValue = getValue(option);

    const isAlreadySelected = value.find(
      (opt) => getValue(opt) === optionValue,
    );

    if (isAlreadySelected && !disableDeselect) {
      return handleRemoveItem(option);
    }

    onChange?.(optionValue);
  };

  const handleGetIsSelected = useCallback(
    (option: T) => value.some((opt) => getValue(opt) === getValue(option)),
    [value],
  );

  const handleClickClear = () => {
    onRemove?.();
  };

  const handleToggleOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const wrapperClass = concatStyles([styles.wrapper, className]);
  const shouldRenderClearButton = hasClear && value.length > 0;

  return (
    <div
      ref={containerRef}
      className={wrapperClass}
      onClick={handleToggleOptions}
    >
      <SelectTrigger
        triggerClassname={value.length > 0 ? styles.trigger : ""}
        disabled={disabled}
        shouldRenderSearch={false}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <SelectedValues
          getLabel={getLabel}
          onRemove={handleRemoveItem}
          placeholder={placeholder}
          selectedOptions={value}
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
          keyExtractor={keyExtractor}
          renderItem={({ option, isSelected, onClick, key }) => {
            if (renderItem)
              return renderItem({ option, isSelected, onClick, key });

            return (
              <MenuItem isSelected={isSelected} onClick={onClick} key={key}>
                {isSelected ? <Checked /> : <Unchecked />}
                {getLabel(option)}
              </MenuItem>
            );
          }}
          {...props}
        >
          {shouldRenderClearButton && (
            <MenuItem
              isSelected={false}
              onClick={handleClickClear}
              className={styles.cleanButton}
            >
              Limpar
            </MenuItem>
          )}
        </SelectMenu>
      )}
    </div>
  );
}
