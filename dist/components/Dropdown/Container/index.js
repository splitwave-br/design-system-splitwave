"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("react-dom");
const react_1 = require("react");
require("../Trigger/variables.scss");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function getElementPosition(element) {
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
const Container = ({ children, className }) => {
    const triggerRef = (0, react_1.useRef)(null);
    const menuRef = (0, react_1.useRef)(null);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleToggle = (0, react_1.useCallback)(() => {
        setIsOpen((v) => !v);
    }, []);
    (0, react_1.useEffect)(() => {
        if (isOpen && triggerRef.current && menuRef.current) {
            const { top, left } = getElementPosition(triggerRef.current);
            const { height, width } = triggerRef.current?.getBoundingClientRect();
            const { height: menuHeight, width: _menuWidth } = menuRef.current?.getBoundingClientRect();
            const documentWidth = document.documentElement.scrollWidth;
            const documentHeight = document.documentElement.scrollHeight;
            const menuWidth = _menuWidth < width ? width : _menuWidth;
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
                menuRef.current.classList.add(styles_module_scss_1.default.fromBottom);
            }
            else {
                menuRef.current.classList.add(styles_module_scss_1.default.fromTop);
            }
            menuRef.current.style.top = `${newTop}px`;
            menuRef.current.style.left = `${newLeft}px`;
            menuRef.current.style.minWidth = `${width}px`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    (0, react_1.useEffect)(() => {
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClick);
        }
        else {
            document.removeEventListener("mousedown", handleClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [isOpen]);
    const containerStyles = [styles_module_scss_1.default.container, className].join(" ");
    const menuChild = (0, react_1.useMemo)(() => {
        let _child = null;
        react_1.Children.toArray(children).find((c) => {
            const child = c;
            const childName = child.type?.displayName;
            if (childName === "Menu")
                _child = child;
        });
        return _child;
    }, [children]);
    const triggerChild = (0, react_1.useMemo)(() => {
        let _child = null;
        react_1.Children.toArray(children).forEach((c) => {
            const child = c;
            const childName = child.type?.displayName;
            if (childName === "Trigger")
                _child = child;
        });
        return _child;
    }, [children]);
    const isEmpty = (0, react_1.useMemo)(() => {
        return (menuChild?.props?.children?.filter?.((c) => !!c).length === 0);
    }, [menuChild]);
    if (isEmpty)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: containerStyles, children: [triggerChild &&
                (0, react_1.cloneElement)(triggerChild, {
                    onClick: handleToggle,
                    ref: triggerRef,
                    isOpen,
                }), isOpen &&
                menuChild &&
                (0, react_dom_1.createPortal)((0, react_1.cloneElement)(menuChild, {
                    ref: menuRef,
                    onClose: () => {
                        setIsOpen(false);
                    },
                }), document.body)] }));
};
exports.Container = Container;
exports.default = exports.Container;
