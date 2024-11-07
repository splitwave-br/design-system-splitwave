import { FilterFieldsProvider } from "../../hooks/useFields";
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/useClickOutside";

import styles from "./styles.module.scss";
import useWindowSize from "@/hooks/useWindowSize";

type TContainer = {
  children: React.ReactNode;
  shouldEjectOnMobile?: boolean; // It is used to don't use dropdown on mobile
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

export const DEFAULT_PADDING = 16;
export const DEFAULT_GAP = 8;

type UsePositionElementProps = {
  relativeElement: React.RefObject<HTMLElement>;
  element: React.RefObject<HTMLElement>;
  isRendered: boolean;
};

export const usePositionElement = ({
  relativeElement,
  element,
  isRendered,
}: UsePositionElementProps) => {
  useEffect(() => {
    if (!isRendered) return;
    if (!relativeElement.current || !element.current) return;

    const { top: relativeTop, left: relativeLeft } = getElementPosition(
      relativeElement.current,
    );
    const { height: relativeHeight, width: relativeWidth } =
      relativeElement.current?.getBoundingClientRect();
    const { height: elementHeight, width: elementWidth } =
      element.current?.getBoundingClientRect();

    const documentWidth = document.documentElement.scrollWidth;
    const documentHeight = document.documentElement.scrollHeight;

    // It was created to try avoid the bug about min width, but the bug still hapens if the element has a min width with !important;
    // const higherWidth =
    //   elementWidth > relativeWidth ? elementWidth : relativeWidth;

    const elementTop = relativeTop + relativeHeight;
    const elementLeft = relativeLeft; // - (elementWidth / 2); // - width / 2;
    const elementRight = elementLeft + elementWidth;
    const elementBottom = elementTop + elementHeight;

    const relativeHalfWidth = relativeWidth / 2;
    const elementHalfWidth = elementWidth / 2;

    let positionTop = elementTop + DEFAULT_GAP;
    let positionLeft = elementLeft + relativeHalfWidth - elementHalfWidth;

    // If the right part goes out of the screen
    if (elementRight > documentWidth) {
      positionLeft = documentWidth - elementWidth - DEFAULT_PADDING;
    }

    // If the left part goes out of the screen
    if (elementLeft < 0) {
      positionLeft = DEFAULT_PADDING;
    }

    // If the bottom part goes out of the screen
    if (elementBottom > documentHeight) {
      positionTop = elementTop - elementHeight;
      element.current.classList.add(styles.fromBottom);
    } else {
      element.current.classList.add(styles.fromTop);
    }

    element.current.style.top = `${positionTop}px`;
    element.current.style.left = `${positionLeft}px`;

    // The problem is here, because the calculation was based on elementWidth, but it will make the element bigger than the beggining of the calculation
    // element.current.style.minWidth = `${relativeWidth}px`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRendered]);
};

export const Container = ({ children, shouldEjectOnMobile }: TContainer) => {
  const { isMobile } = useWindowSize();
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isMobileAndShouldEject = useMemo(
    () => isMobile && shouldEjectOnMobile,
    [isMobile, shouldEjectOnMobile],
  );

  const handleToggle = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  usePositionElement({
    relativeElement: triggerRef,
    element: contentRef,
    isRendered: isOpen,
  });

  useClickOutside({
    ref: contentRef,
    callback: () => setIsOpen(false),
    isActive: isOpen,
  });

  const containerStyles = [
    styles.container,
    isMobileAndShouldEject ? styles.containerEjected : "",
  ].join(" ");

  const contentChild = useMemo(() => {
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
      (contentChild as unknown as JSX.Element)?.props?.children?.filter?.(
        (c: any) => !!c,
      ).length === 0
    );
  }, [contentChild]);

  const renderTrigger = useCallback(() => {
    // if (isMobileAndShouldEject || !triggerChild) return null;
    if (!triggerChild) return null;

    return cloneElement(triggerChild, {
      onClick: handleToggle,
      ref: triggerRef,
      isOpen,
    });
  }, [isMobileAndShouldEject, triggerChild, handleToggle, isOpen]);

  const renderContent = useCallback(() => {
    if (!contentChild) return null;

    // if (isMobileAndShouldEject) {
    //   return cloneElement(contentChild, { isEjected: true });
    // }

    if (!isOpen) return null;

    return createPortal(
      cloneElement(contentChild, {
        ref: contentRef,
        onClose: () => {
          setIsOpen(false);
        },
      }),
      document.body,
    );
  }, [
    contentChild,
    contentRef,
    handleToggle,
    isOpen,
    setIsOpen,
    triggerRef,
    isMobileAndShouldEject,
  ]);

  if (isEmpty) return null;

  return (
    <FilterFieldsProvider>
      <div className={containerStyles}>
        {renderTrigger()}
        {renderContent()}
      </div>
    </FilterFieldsProvider>
  );
};

Container.displayName = "Container";
