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
    var triggerRef = _a.triggerRef, elementRef = _a.elementRef, isEnabled = _a.isEnabled, _b = _a.gap, gap = _b === void 0 ? DEFAULT_GAP : _b;
    var _c = useState("Bottom"), animationDirection = _c[0], setAnimationDirection = _c[1];
    useEffect(function () {
        if (!isEnabled || !triggerRef.current || !elementRef.current)
            return;
        var _a = triggerRef.current.getBoundingClientRect(), triggerHeight = _a.height, triggerWidth = _a.width, triggerLeft = _a.left, triggerTop = _a.top;
        var elementHeight = elementRef.current.getBoundingClientRect().height;
        var viewportHeight = document.documentElement.scrollHeight;
        var bottomEdge = triggerTop + triggerHeight + elementHeight + gap;
        var finalTop = triggerTop + triggerHeight + gap;
        var overflowsBottom = bottomEdge > viewportHeight;
        if (overflowsBottom) {
            finalTop = triggerTop - elementHeight - gap;
            setAnimationDirection("Top");
        }
        else {
            setAnimationDirection("Bottom");
        }
        var floatingElement = elementRef.current;
        floatingElement.style.zIndex = "1011";
        floatingElement.style.top = "".concat(finalTop, "px");
        floatingElement.style.left = "".concat(triggerLeft, "px");
        floatingElement.style.width = "".concat(triggerWidth, "px");
    }, [isEnabled]);
    return { animationDirection: animationDirection };
};
