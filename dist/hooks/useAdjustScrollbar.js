'use client';
import { useCallback } from 'react';
import useWindowSize from './useWindowSize';
var getScrollbarWidth = function () {
    return window.innerWidth - document.documentElement.clientWidth;
};
var useAdjustScrollbar = function () {
    var isMobile = useWindowSize().isMobile;
    var handleRemoveScrollbar = useCallback(function (remove) {
        var hasScrollbar = document.documentElement.scrollHeight >
            document.documentElement.clientHeight;
        if (remove) {
            if (hasScrollbar) {
                var scrollbarWidth = getScrollbarWidth();
                document.body.style.paddingRight = isMobile
                    ? '0'
                    : "".concat(scrollbarWidth, "px");
            }
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'inherit';
            document.body.style.paddingRight = '0';
        }
    }, [isMobile]);
    return { handleRemoveScrollbar: handleRemoveScrollbar };
};
export default useAdjustScrollbar;
