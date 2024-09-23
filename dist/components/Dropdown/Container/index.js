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
        console.log("toggle chamado");
        setIsOpen((v) => !v);
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (isOpen && triggerRef.current && menuRef.current) {
            const { top, left } = getElementPosition(triggerRef.current);
            const { height, width } = (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            const { height: menuHeight, width: menuWidth } = (_b = menuRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            const documentWidth = document.documentElement.scrollWidth;
            const documentHeight = document.documentElement.scrollHeight;
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
            var _a;
            const child = c;
            const childName = (_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName;
            if (childName === "Menu")
                _child = child;
        });
        return _child;
    }, [children]);
    const triggerChild = (0, react_1.useMemo)(() => {
        let _child = null;
        react_1.Children.toArray(children).forEach((c) => {
            var _a;
            const child = c;
            const childName = (_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName;
            if (childName === "Trigger")
                _child = child;
        });
        return _child;
    }, [children]);
    const isEmpty = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        return (((_c = (_b = (_a = menuChild === null || menuChild === void 0 ? void 0 : menuChild.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.filter) === null || _c === void 0 ? void 0 : _c.call(_b, (c) => !!c).length) === 0);
    }, [menuChild]);
    if (isEmpty)
        return null;
    console.log(isOpen);
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
                        console.log("close chamado");
                        setIsOpen(false);
                    },
                }), document.body)] }));
};
exports.Container = Container;
exports.default = exports.Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9Db250YWluZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsaUNBUWU7QUFDZixxQ0FBbUM7QUFFbkMsOEVBQTBDO0FBYTFDLFNBQVMsa0JBQWtCLENBQUMsT0FBWTtJQUN0QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLDhEQUE4RDtJQUMxRyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNyRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUVuRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUMxQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUN2QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUM1QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUU3QyxPQUFPO1FBQ0wsR0FBRyxFQUFFLFdBQVc7UUFDaEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLGNBQWM7S0FDdkIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFFcEIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWEsRUFBRSxFQUFFO0lBQzlELE1BQU0sVUFBVSxHQUFHLElBQUEsY0FBTSxFQUFpQixJQUFJLENBQUMsQ0FBQztJQUNoRCxNQUFNLE9BQU8sR0FBRyxJQUFBLGNBQU0sRUFBaUIsSUFBSSxDQUFDLENBQUM7SUFFN0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQVUsS0FBSyxDQUFDLENBQUM7SUFFckQsTUFBTSxZQUFZLEdBQUcsSUFBQSxtQkFBVyxFQUFDLEdBQUcsRUFBRTtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7O1FBQ2IsSUFBSSxNQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEQsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFBLFVBQVUsQ0FBQyxPQUFPLDBDQUFFLHFCQUFxQixFQUFFLENBQUM7WUFDdEUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUM1QyxNQUFBLE9BQU8sQ0FBQyxPQUFPLDBDQUFFLHFCQUFxQixFQUFFLENBQUM7WUFFM0MsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDM0QsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7WUFFN0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLFNBQVMsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLE1BQU0sVUFBVSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFFeEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBRS9DLElBQUksU0FBUyxHQUFHLGFBQWEsRUFBRSxDQUFDO2dCQUM5QixPQUFPLEdBQUcsYUFBYSxHQUFHLFNBQVMsR0FBRyxlQUFlLENBQUM7WUFDeEQsQ0FBQztZQUVELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNqQixPQUFPLEdBQUcsZUFBZSxDQUFDO1lBQzVCLENBQUM7WUFFRCxJQUFJLFVBQVUsR0FBRyxjQUFjLEVBQUUsQ0FBQztnQkFDaEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELENBQUM7aUJBQU0sQ0FBQztnQkFDTixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUM7WUFDMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUM7WUFDNUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUM7UUFDaEQsQ0FBQztRQUNELHVEQUF1RDtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRWIsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25FLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsQ0FBQzthQUFNLENBQUM7WUFDTixRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCxPQUFPLEdBQUcsRUFBRTtZQUNWLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUViLE1BQU0sZUFBZSxHQUFHLENBQUMsNEJBQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhFLE1BQU0sU0FBUyxHQUFHLElBQUEsZUFBTyxFQUFDLEdBQUcsRUFBRTtRQUM3QixJQUFJLE1BQU0sR0FBdUIsSUFBSSxDQUFDO1FBRXRDLGdCQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFOztZQUNwQyxNQUFNLEtBQUssR0FBRyxDQUFnQixDQUFDO1lBQy9CLE1BQU0sU0FBUyxHQUFHLE1BQUEsS0FBSyxDQUFDLElBQUksMENBQUUsV0FBVyxDQUFDO1lBRTFDLElBQUksU0FBUyxLQUFLLE1BQU07Z0JBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFZixNQUFNLFlBQVksR0FBRyxJQUFBLGVBQU8sRUFBQyxHQUFHLEVBQUU7UUFDaEMsSUFBSSxNQUFNLEdBQTZCLElBQUksQ0FBQztRQUU1QyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7WUFDdkMsTUFBTSxLQUFLLEdBQUcsQ0FBZ0IsQ0FBQztZQUMvQixNQUFNLFNBQVMsR0FBRyxNQUFBLEtBQUssQ0FBQyxJQUFJLDBDQUFFLFdBQVcsQ0FBQztZQUUxQyxJQUFJLFNBQVMsS0FBSyxTQUFTO2dCQUFFLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFPLEVBQUMsR0FBRyxFQUFFOztRQUMzQixPQUFPLENBQ0wsQ0FBQSxNQUFBLE1BQUEsTUFBQyxTQUFvQyxhQUFwQyxTQUFTLHVCQUFULFNBQVMsQ0FBNkIsS0FBSywwQ0FBRSxRQUFRLDBDQUFFLE1BQU0sbURBQzVELENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNmLE1BQU0sTUFBSyxDQUFDLENBQ2YsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFaEIsSUFBSSxPQUFPO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFFLGVBQWUsYUFDNUIsWUFBWTtnQkFDWCxJQUFBLG9CQUFZLEVBQUMsWUFBWSxFQUFFO29CQUN6QixPQUFPLEVBQUUsWUFBWTtvQkFDckIsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsTUFBTTtpQkFDUCxDQUFDLEVBRUgsTUFBTTtnQkFDTCxTQUFTO2dCQUNULElBQUEsd0JBQVksRUFDVixJQUFBLG9CQUFZLEVBQUMsU0FBUyxFQUFFO29CQUN0QixHQUFHLEVBQUUsT0FBTztvQkFDWixPQUFPLEVBQUUsR0FBRyxFQUFFO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQzdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztpQkFDRixDQUFDLEVBQ0YsUUFBUSxDQUFDLElBQUksQ0FDZCxJQUNDLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWpJVyxRQUFBLFNBQVMsYUFpSXBCO0FBRUYsa0JBQWUsaUJBQVMsQ0FBQyJ9