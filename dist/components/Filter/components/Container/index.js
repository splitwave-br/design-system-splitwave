import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FilterFieldsProvider } from "../../hooks/useFields";
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../../../../hooks/useClickOutside";
import styles from "./styles.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
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
export var DEFAULT_PADDING = 16;
export var DEFAULT_GAP = 8;
export var usePositionElement = function (_a) {
    var relativeElement = _a.relativeElement, element = _a.element, isRendered = _a.isRendered;
    useEffect(function () {
        var _a, _b;
        if (!isRendered)
            return;
        if (!relativeElement.current || !element.current)
            return;
        console.log(getElementPosition(relativeElement.current));
        var _c = getElementPosition(relativeElement.current), relativeTop = _c.top, relativeLeft = _c.left;
        var _d = (_a = relativeElement.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(), relativeHeight = _d.height, relativeWidth = _d.width;
        var _e = (_b = element.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect(), elementHeight = _e.height, elementWidth = _e.width;
        var documentWidth = document.documentElement.scrollWidth;
        var documentHeight = document.documentElement.scrollHeight;
        // It was created to try avoid the bug about min width, but the bug still hapens if the element has a min width with !important;
        // const higherWidth =
        //   elementWidth > relativeWidth ? elementWidth : relativeWidth;
        var elementTop = relativeTop + relativeHeight;
        var elementLeft = relativeLeft; // - (elementWidth / 2); // - width / 2;
        var elementRight = elementLeft + elementWidth;
        var elementBottom = elementTop + elementHeight;
        var relativeHalfWidth = relativeWidth / 2;
        var elementHalfWidth = elementWidth / 2;
        var positionTop = elementTop + DEFAULT_GAP;
        var positionLeft = elementLeft + relativeHalfWidth - elementHalfWidth;
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
        }
        else {
            element.current.classList.add(styles.fromTop);
        }
        element.current.style.top = "".concat(positionTop, "px");
        element.current.style.left = "".concat(positionLeft, "px");
        // The problem is here, because the calculation was based on elementWidth, but it will make the element bigger than the beggining of the calculation
        // element.current.style.minWidth = `${relativeWidth}px`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRendered]);
};
export var Container = function (_a) {
    var children = _a.children, shouldEjectOnMobile = _a.shouldEjectOnMobile;
    var isMobile = useWindowSize().isMobile;
    var triggerRef = useRef(null);
    var contentRef = useRef(null);
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var isMobileAndShouldEject = useMemo(function () { return isMobile && shouldEjectOnMobile; }, [isMobile, shouldEjectOnMobile]);
    var handleToggle = useCallback(function () {
        setIsOpen(function (v) { return !v; });
    }, []);
    usePositionElement({
        relativeElement: triggerRef,
        element: contentRef,
        isRendered: isOpen,
    });
    useClickOutside({
        ref: contentRef,
        callback: function () { return setIsOpen(false); },
        isActive: isOpen,
    });
    var containerStyles = [
        styles.container,
        isMobileAndShouldEject ? styles.containerEjected : "",
    ].join(" ");
    var contentChild = useMemo(function () {
        var _child = null;
        Children.toArray(children).find(function (c) {
            var _a;
            var child = c;
            var childName = (_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName;
            if (childName === "Menu")
                _child = child;
        });
        return _child;
    }, [children]);
    var triggerChild = useMemo(function () {
        var _child = null;
        Children.toArray(children).forEach(function (c) {
            var _a;
            var child = c;
            var childName = (_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName;
            if (childName === "Trigger")
                _child = child;
        });
        return _child;
    }, [children]);
    var isEmpty = useMemo(function () {
        var _a, _b, _c;
        return (((_c = (_b = (_a = contentChild === null || contentChild === void 0 ? void 0 : contentChild.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.filter) === null || _c === void 0 ? void 0 : _c.call(_b, function (c) { return !!c; }).length) === 0);
    }, [contentChild]);
    var renderTrigger = useCallback(function () {
        // if (isMobileAndShouldEject || !triggerChild) return null;
        if (!triggerChild)
            return null;
        return cloneElement(triggerChild, {
            onClick: handleToggle,
            ref: triggerRef,
            isOpen: isOpen,
        });
    }, [isMobileAndShouldEject, triggerChild, handleToggle, isOpen]);
    var renderContent = useCallback(function () {
        if (!contentChild)
            return null;
        // if (isMobileAndShouldEject) {
        //   return cloneElement(contentChild, { isEjected: true });
        // }
        if (!isOpen)
            return null;
        return createPortal(cloneElement(contentChild, {
            ref: contentRef,
            onClose: function () {
                setIsOpen(false);
            },
        }), document.body);
    }, [
        contentChild,
        contentRef,
        handleToggle,
        isOpen,
        setIsOpen,
        triggerRef,
        isMobileAndShouldEject,
    ]);
    if (isEmpty)
        return null;
    return (_jsx(FilterFieldsProvider, { children: _jsxs("div", { className: containerStyles, children: [renderTrigger(), renderContent()] }) }));
};
Container.displayName = "Container";
