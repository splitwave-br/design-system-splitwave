import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import styles from "./styles.module.scss";

import { SelectProps } from "./types";
import { SelectMenu } from "./components/Menu";
import { useFloatingElement } from "@/hooks/useFloatingElement/hooks";
import { useClickOutside } from "@/hooks/useClickOutside";
import { concatStyles } from "@/utils/concatStyles";
import { SelectTrigger } from "./components/Trigger";
import { SelectedValue } from "./components/SelectedValue";
import { useScrollOutside } from "@/hooks/useScrollOutside";

export const Select = <T,>({
  asPortal = false,
  name,
  options,
  prefix,
  placeholder = "Selecione",
  exceptionRef,
  enableDeselect = true,
  searchable = false,
  value,
  disabled,
  className,
  triggerClassname,
  menuContainerClassname,
  menuInnerClassname,
  getValue,
  onChange,
  getLabel,
  renderItem,
  ...props
}: SelectProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const [searchValue, setSearchValue] = useState("");

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

  useScrollOutside({
    isActive: isOpen,
    containerRef: menuRef,
    onTrigger: () => setIsOpen(false),
  });

  const filteredOptions = useMemo(() => {
    if (!searchable) return options;

    return options.filter((option) => {
      return getLabel(option)
        .toString()
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  }, [searchValue, options, getLabel]);

  const handleSelect = useCallback(
    (option: T) => {
      const selectedOptionValue = selectedOption && getValue(selectedOption);
      const optionValue = getValue(option);
      const isSelectedOption = optionValue === selectedOptionValue;

      if (isSelectedOption) {
        if (!enableDeselect) return;
        setSelectedOption(null);
        onChange?.(undefined);
        return;
      }

      setSelectedOption(option);
      onChange?.(option);
      setSearchValue("");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enableDeselect, selectedOption],
  );

  const handleFirstRender = useCallback(() => {
    if (value === null || value === undefined) {
      setSelectedOption(null);
      return;
    }

    const currentSelectedOption = options.find(
      (option) => getValue(option) === value,
    );

    if (currentSelectedOption) {
      setSelectedOption(currentSelectedOption);
    }
  }, [options, value, getValue]);

  useEffect(() => {
    handleFirstRender();
  }, [handleFirstRender]);

  const handleOpenOptions = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const containerStyles = concatStyles([styles.container, className]);

  const selectedOptionLabel = selectedOption
    ? getLabel(selectedOption)
    : undefined;

  return (
    <div
      ref={containerRef}
      className={containerStyles}
      onClick={handleOpenOptions}
    >
      <SelectTrigger
        prefix={prefix}
        disabled={disabled}
        selectedLabel={selectedOptionLabel}
        shouldRenderSearch={isOpen && searchable}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <SelectedValue
          placeholder={placeholder}
          selectedOptionLabel={selectedOptionLabel}
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
          handleGetIsSelected={(option) => option === selectedOption}
          animationDirection={animationDirection}
          asPortal={asPortal}
          disabled={disabled}
          {...props}
        />
      )}
    </div>
  );
};
