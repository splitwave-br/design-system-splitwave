"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";
var Trigger = function (_a) {
    var path = _a.path, children = _a.children, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, currentPath = _a.currentPath, relatedPath = _a.relatedPath;
    var pathName = currentPath || usePathname();
    var isActive = pathName === path || (relatedPath && pathName.includes(relatedPath));
    var tabStyles = [
        styles.trigger,
        isActive && styles.active,
        isDisabled && styles.disabled,
    ].join(" ");
    return (_jsx(Link, { "aria-disabled": isDisabled, href: path, className: tabStyles, children: children }));
};
export default Trigger;
