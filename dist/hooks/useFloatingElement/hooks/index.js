"use client";
import { useEffect, useState } from "react";
var DEFAULT_GAP = 8;
function getElementPosition(element) {
    var rect = element.getBoundingClientRect(); // Get the position of the element in relation to the viewport
    var scrollLeft = document.documentElement.scrollLeft;
    var scrollTop = document.documentElement.scrollTop;
    var absoluteLeft = rect.left + scrollLeft;
    var absoluteTop = rect.top + scrollTop;
    var absoluteRight = rect.right + scrollLeft;
    var absoluteBottom = rect.bottom + scrollTop;
    return {
        top: absoluteTop,
        left: absoluteLeft,
        right: absoluteRight,
        bottom: absoluteBottom,
    };
}
export var useFloatingElement = function (_a) {
    var triggerRef = _a.triggerRef, elementRef = _a.elementRef, isEnabled = _a.isEnabled, _b = _a.asPortal, asPortal = _b === void 0 ? false : _b, _c = _a.gap, gap = _c === void 0 ? DEFAULT_GAP : _c;
    var _d = useState("Bottom"), animationDirection = _d[0], setAnimationDirection = _d[1];
    useEffect(function () {
        if (!isEnabled || !triggerRef.current || !elementRef.current)
            return;
        var _a = triggerRef.current.getBoundingClientRect(), triggerHeight = _a.height, triggerWidth = _a.width, triggerLeft = _a.left, triggerTop = _a.top;
        var elementHeight = elementRef.current.getBoundingClientRect().height;
        var viewportHeight = window.innerHeight;
        var bottomEdge = triggerTop + triggerHeight + elementHeight + gap;
        var overflowsBottom = bottomEdge > viewportHeight;
        var finalTop = triggerTop + triggerHeight + gap;
        if (overflowsBottom) {
            finalTop = triggerTop - elementHeight - gap;
            setAnimationDirection("Top");
        }
        else {
            setAnimationDirection("Bottom");
        }
        if (asPortal) {
            var floatingElement = elementRef.current;
            floatingElement.style.zIndex = "1011";
            floatingElement.style.top = "".concat(finalTop + window.scrollY, "px");
            floatingElement.style.left = "".concat(triggerLeft + window.scrollX, "px");
            floatingElement.style.width = "".concat(triggerWidth, "px");
            floatingElement.style.position = "absolute";
        }
    }, [isEnabled, asPortal, gap, triggerRef, elementRef]);
    return { animationDirection: animationDirection };
};
