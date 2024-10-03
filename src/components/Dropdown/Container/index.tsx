import { createPortal } from "react-dom";
import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import "../Trigger/variables.scss";

import styles from "./styles.module.scss";

type TBounding = {
  top: number;
  left: number;
  minWidth: number;
};

type TDropdown = {
  children: React.ReactNode;
  className?: string;
};

function getElementPosition(element: any) {
  let rect = element.getBoundingClientRect(); // Get the position of the element in relation to the viewport
  let scrollLeft = document.documentElement.scrollLeft;
  let scrollTop = document.documentElement.scrollTop;

  let absoluteLeft = rect.left + scrollLeft;
  let absoluteTop = rect.top + scrollTop;
  let absoluteRight = rect.right + scrollLeft;
  let absoluteBottom = rect.bottom + scrollTop;

  return {
    top: absoluteTop,
    left: absoluteLeft,
    right: absoluteRight,
    bottom: absoluteBottom,
  };
}

const DEFAULT_PADDING = 16;

export const Container = ({ children, className }: TDropdown) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    console.log("toggle chamado");
    setIsOpen((v) => !v);
  }, []);

  useEffect(() => {
    if (isOpen && triggerRef.current && menuRef.current) {
      const { top, left } = getElementPosition(triggerRef.current);
      const { height, width } = triggerRef.current?.getBoundingClientRect();
      const { height: menuHeight, width: menuWidth } =
        menuRef.current?.getBoundingClientRect();

      const documentWidth = document.documentElement.scrollWidth;
      const documentHeight = document.documentElement.scrollHeight;

      const menuTop = top + height;
      const menuLeft = left - width / 2;
      const menuRight = menuLeft + menuWidth;
      const menuBottom = menuTop + menuHeight;

      let newTop = top + height;
      let newLeft = left + width / 2 - menuWidth / 2;

      if (menuRight > documentWidth) {
        newLeft = documentWidth - menuWidth - DEFAULT_PADDING;
      }

      if (menuLeft < 0) {
        newLeft = DEFAULT_PADDING;
      }

      if (menuBottom > documentHeight) {
        newTop = top - menuHeight;
        menuRef.current.classList.add(styles.fromBottom);
      } else {
        menuRef.current.classList.add(styles.fromTop);
      }

      menuRef.current.style.top = `${newTop}px`;
      menuRef.current.style.left = `${newLeft}px`;
      menuRef.current.style.minWidth = `${width}px`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const containerStyles = [styles.container, className].join(" ");

  const menuChild = useMemo(() => {
    let _child: JSX.Element | null = null;

    Children.toArray(children).find((c) => {
      const child = c as JSX.Element;
      const childName = child.type?.displayName;

      if (childName === "Menu") _child = child;
    });

    return _child;
  }, [children]);

  const triggerChild = useMemo(() => {
    let _child: React.JSX.Element | null = null;

    Children.toArray(children).forEach((c) => {
      const child = c as JSX.Element;
      const childName = child.type?.displayName;

      if (childName === "Trigger") _child = child;
    });

    return _child;
  }, [children]);

  const isEmpty = useMemo(() => {
    return (
      (menuChild as unknown as JSX.Element)?.props?.children?.filter?.(
        (c: any) => !!c,
      ).length === 0
    );
  }, [menuChild]);

  if (isEmpty) return null;

  return (
    <div className={containerStyles}>
      {triggerChild &&
        cloneElement(triggerChild, {
          onClick: handleToggle,
          ref: triggerRef,
          isOpen,
        })}

      {isOpen &&
        menuChild &&
        createPortal(
          cloneElement(menuChild, {
            ref: menuRef,
            onClose: () => {
              console.log("close chamado");
              setIsOpen(false);
            },
          }),
          document.body,
        )}
    </div>
  );
};

export default Container;
