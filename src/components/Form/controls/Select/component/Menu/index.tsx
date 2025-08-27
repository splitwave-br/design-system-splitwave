import React, { forwardRef, Ref } from "react";
import { concatStyles } from "@/utils/concatStyles";
import floatingStyles from "@/hooks/useFloatingElement/styles/styles.module.scss";
import "@/components/Dropdown/Item/variables.scss";
import styles from "./styles.module.scss";

import { SelectMenuProps } from "../../types";
import { createPortal } from "react-dom";
import { MenuItem } from "../MenuItem";

const BaseSelectMenu = <T,>(
  {
    handleGetIsSelected,
    onChange,
    renderItem,
    getValue,
    getLabel,
    options,
    asPortal = false,
    menuContainerClassname,
    menuInnerClassname,
    animationDirection,
    children,
    ...props
  }: SelectMenuProps<T>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const menuStyles = concatStyles([
    styles.menu,
    floatingStyles[`animateFrom${animationDirection}`],
    menuContainerClassname,
  ]);

  const innerContainerStyles = concatStyles([
    styles.menuInner,
    menuInnerClassname,
  ]);

  const content = (
    <div ref={ref} className={menuStyles} {...props}>
      <div className={innerContainerStyles}>
        {options.length ? (
          options.map((option) => {
            const isSelected = handleGetIsSelected(option);
            const optionValue = getValue(option);

            const onClick = () => onChange(option);

            if (renderItem)
              return renderItem({
                option,
                isSelected,
                onClick,
              });

            return (
              <MenuItem
                isSelected={isSelected}
                key={optionValue}
                onClick={onClick}
              >
                <span>{getLabel(option)}</span>
              </MenuItem>
            );
          })
        ) : (
          <MenuItem isSelected={false} className={styles.option__empty}>
            Nenhum item encontrado
          </MenuItem>
        )}
        {children}
      </div>
    </div>
  );

  return asPortal ? createPortal(content, document.body) : content;
};

export const SelectMenu = forwardRef(BaseSelectMenu) as <T>(
  props: SelectMenuProps<T> & { ref?: Ref<HTMLDivElement> },
) => JSX.Element;
