"use client";

import { useEffect, useState } from "react";

const DEFAULT_GAP = 8;

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

export type FloatingDirection = "Bottom" | "Top";

interface UseFloatingElementProps {
  triggerRef: React.RefObject<HTMLDivElement | null>;
  elementRef: React.RefObject<HTMLDivElement | null>;
  isEnabled: boolean;
  gap?: number;
}

export const useFloatingElement = ({
  triggerRef,
  elementRef,
  isEnabled,
  gap = DEFAULT_GAP,
}: UseFloatingElementProps) => {
  const [animationDirection, setAnimationDirection] =
    useState<FloatingDirection>("Bottom");

  useEffect(() => {
    if (!isEnabled || !triggerRef.current || !elementRef.current) return;

    const {
      height: triggerHeight,
      width: triggerWidth,
      left: triggerLeft,
      top: triggerTop,
    } = triggerRef.current.getBoundingClientRect();
    const { height: elementHeight } =
      elementRef.current.getBoundingClientRect();
    const viewportHeight = document.documentElement.scrollHeight;

    const bottomEdge = triggerTop + triggerHeight + elementHeight + gap;

    let finalTop = triggerTop + triggerHeight + gap;

    const overflowsBottom = bottomEdge > viewportHeight;
    if (overflowsBottom) {
      finalTop = triggerTop - elementHeight - gap;
      setAnimationDirection("Top");
    } else {
      setAnimationDirection("Bottom");
    }
    const floatingElement = elementRef.current;
    floatingElement.style.zIndex = "1011";
    floatingElement.style.top = `${finalTop}px`;
    floatingElement.style.left = `${triggerLeft}px`;
    floatingElement.style.width = `${triggerWidth}px`;
  }, [isEnabled]);

  return { animationDirection };
};
