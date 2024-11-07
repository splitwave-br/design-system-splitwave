import { jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import { Children, cloneElement, useEffect, useRef, useState, useCallback, useMemo, } from "react";
import "../Trigger/variables.scss";
import styles from "./styles.module.scss";
import useClickOutside from "../../../hooks/useClickOutside";
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
export var Container = function (_a) {
    var children = _a.children, className = _a.className;
    var triggerRef = useRef(null);
    var menuRef = useRef(null);
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleToggle = useCallback(function () {
        setIsOpen(function (v) { return !v; });
    }, []);
    useEffect(function () {
        var _a, _b;
        if (isOpen && triggerRef.current && menuRef.current) {
            var _c = getElementPosition(triggerRef.current), top_1 = _c.top, left = _c.left;
            var _d = (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(), height = _d.height, width = _d.width;
            var _e = (_b = menuRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect(), menuHeight = _e.height, _menuWidth = _e.width;
            var documentWidth = document.documentElement.scrollWidth;
            var documentHeight = document.documentElement.scrollHeight;
            var menuWidth = _menuWidth < width ? width : _menuWidth;
            var menuTop = top_1 + height;
            var menuLeft = left - width / 2;
            var menuRight = menuLeft + menuWidth;
            var menuBottom = menuTop + menuHeight;
            var newTop = top_1 + height;
            var newLeft = left + width / 2 - menuWidth / 2;
            if (menuRight > documentWidth) {
                newLeft = documentWidth - menuWidth - DEFAULT_PADDING;
            }
            if (menuLeft < 0) {
                newLeft = DEFAULT_PADDING;
            }
            if (menuBottom > documentHeight) {
                newTop = top_1 - menuHeight;
                menuRef.current.classList.add(styles.fromBottom);
            }
            else {
                menuRef.current.classList.add(styles.fromTop);
            }
            menuRef.current.style.top = "".concat(newTop, "px");
            menuRef.current.style.left = "".concat(newLeft, "px");
            menuRef.current.style.minWidth = "".concat(width, "px");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    useClickOutside({
        ref: menuRef,
        callback: function () { return setIsOpen(false); },
        isActive: isOpen,
    });
    var containerStyles = [styles.container, className].join(" ");
    var menuChild = useMemo(function () {
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
        return (((_c = (_b = (_a = menuChild === null || menuChild === void 0 ? void 0 : menuChild.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.filter) === null || _c === void 0 ? void 0 : _c.call(_b, function (c) { return !!c; }).length) === 0);
    }, [menuChild]);
    if (isEmpty)
        return null;
    return (_jsxs("div", { className: containerStyles, children: [triggerChild &&
                cloneElement(triggerChild, {
                    onClick: handleToggle,
                    ref: triggerRef,
                    isOpen: isOpen,
                }), isOpen &&
                menuChild &&
                createPortal(cloneElement(menuChild, {
                    ref: menuRef,
                    onClose: function () {
                        setIsOpen(false);
                    },
                }), document.body)] }));
};
export default Container;
