import React, { forwardRef, Ref } from "react";
import { concatStyles } from "@/utils/concatStyles";
import floatingStyles from "@/hooks/useFloatingElement/styles/styles.module.scss";
import "@/components/Dropdown/Item/variables.scss";
import styles from "./styles.module.scss";

import { SelectMenuProps } from "../../types";
import { createPortal } from "react-dom";

const BaseSelectMenu = <T,>(
  {
    handleGetIsSelected,
    onSelect,
    renderItem,
    getValue,
    getLabel,
    options,
    asPortal = false,
    menuContainerClassname,
    menuInnerClassname,
    animationDirection,
    withDivider,
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
            const optionStyles = concatStyles([
              styles.option,
              isSelected && styles.option__selected,
              withDivider && styles.option__divider,
            ]);

            const onClick = () => onSelect(option);

            if (renderItem)
              return renderItem({ option, className: optionStyles, onClick });

            return (
              <span
                key={getValue(option)}
                className={optionStyles}
                onClick={onClick}
              >
                {getLabel(option)}
              </span>
            );
          })
        ) : (
          <span className={concatStyles([styles.option, styles.option__empty])}>
            Nenhum item encontrado
          </span>
        )}
      </div>
    </div>
  );

  return asPortal ? createPortal(content, document.body) : content;
};

export const SelectMenu = forwardRef(BaseSelectMenu) as <T>(
  props: SelectMenuProps<T> & { ref?: Ref<HTMLDivElement> },
) => JSX.Element;
