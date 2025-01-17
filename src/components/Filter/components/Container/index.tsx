"use client";

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
import React from "react";

type TContainer = {
  children: React.ReactNode;
  shouldEjectOnMobile?: boolean; // It is used to don't use dropdown on mobile
  shouldPortal?: boolean;
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

const extractFieldNames = (elements: React.ReactNode): string[] => {
  let fieldNames: string[] = [];

  Children.toArray(elements).forEach((element) => {
    if (!React.isValidElement(element)) return;
    const childElements = element.props?.children;
    if (childElements) {
      fieldNames = fieldNames.concat(extractFieldNames(childElements));
    }

    const fieldName = element.props?.field;
    if (fieldName) fieldNames.push(fieldName);
  });

  return fieldNames;
};

export const DEFAULT_PADDING = 16;
export const DEFAULT_GAP = 8;

type UsePositionElementProps = {
  relativeElement: React.RefObject<HTMLElement>;
  element: React.RefObject<HTMLElement>;
  containerElement: HTMLElement;
  isRendered: boolean;
  shouldPortal?: boolean;
};

export const usePositionElement = ({
  relativeElement,
  element,
  containerElement,
  isRendered,
  shouldPortal = true,
}: UsePositionElementProps) => {
  useEffect(() => {
    if (!isRendered) return;
    if (!relativeElement.current || !element.current || !containerElement)
      return;

    const { top: relativeTop, left: relativeLeft } = getElementPosition(
      relativeElement.current,
    );
    const { height: relativeHeight, width: relativeWidth } =
      relativeElement.current?.getBoundingClientRect();
    const { width: elementWidth } = element.current?.getBoundingClientRect();

    const { offsetTop: relativeOffsetTop, offsetLeft: relativeOffsetLeft } =
      relativeElement.current;

    const documentWidth = document.documentElement.scrollWidth;
    // TODO: [1] Think in a way to solve this problem;
    // We were getting documentHeight to see if we could open the dropdown
    //  from the bottom, but it was causing a bug when the element has
    //  a height higher than documentHeight;
    // const documentHeight = containerElement.scrollHeight; //document.documentElement.scrollHeight;

    // TODO: [2] Think in a way to solve this problem;
    // It was created to try avoid the bug about min width, but the bug still hapens if the element has a min width with !important;
    // const higherWidth =
    //   elementWidth > relativeWidth ? elementWidth : relativeWidth;

    let elementTop = relativeTop + relativeHeight;
    let elementLeft = relativeLeft;

    if (!shouldPortal) {
      elementTop = relativeOffsetTop + relativeHeight;
      elementLeft = relativeOffsetLeft;
    }

    let elementRight = elementLeft + elementWidth;

    // TODO: [1]
    // let elementBottom = elementTop + elementHeight;

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

    // TODO: [1]
    // // If the bottom part goes out of the screen
    // if (elementBottom > documentHeight) {
    //   positionTop = elementTop - elementHeight;
    //   element.current.classList.add(styles.fromBottom);
    // } else {
    //   element.current.classList.add(styles.fromTop);
    // }

    element.current.style.top = `${positionTop}px`;
    element.current.style.left = `${positionLeft}px`;

    // TODO: [2]
    // The problem is here, because the calculation was based on elementWidth, but it will make the element bigger than the beggining of the calculation
    // element.current.style.minWidth = `${relativeWidth}px`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRendered]);
};

export const Container = ({
  children,
  shouldEjectOnMobile,
  shouldPortal = true,
}: TContainer) => {
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

  const containerPortal = shouldPortal
    ? document.body
    : triggerRef.current?.parentElement || document.body;

  usePositionElement({
    relativeElement: triggerRef,
    element: contentRef,
    containerElement: containerPortal,
    isRendered: isOpen,
    shouldPortal,
  });

  useClickOutside({
    ref: contentRef,
    callback: () => setIsOpen(false),
    isActive: isOpen,
    exceptionRef: triggerRef,
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

  const childrenFields = useMemo(() => extractFieldNames(children), [children]);

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
      fields: childrenFields,
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
      containerPortal,
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
