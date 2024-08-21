'use client';

import { useCallback } from 'react';
import useWindowSize from './useWindowSize';

const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth;

const useAdjustScrollbar = () => {
  const { isMobile } = useWindowSize();
  const handleRemoveScrollbar = useCallback(
    (remove: boolean) => {
      const hasScrollbar =
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight;

      if (remove) {
        if (hasScrollbar) {
          const scrollbarWidth = getScrollbarWidth();
          document.body.style.paddingRight = isMobile
            ? '0'
            : `${scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'inherit';
        document.body.style.paddingRight = '0';
      }
    },
    [isMobile]
  );

  return { handleRemoveScrollbar };
};

export default useAdjustScrollbar;
