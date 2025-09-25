import { jsx as _jsx } from "react/jsx-runtime";
import { NavSection } from "./components/NavSection";
import { NavGroup } from "./components/NavGroup";
import { NavItem } from "./components/NavItem";
import "./variables.scss";
import styles from "./styles.module.scss";
import { SidebarFooter } from "./components/Footer";
export var Sidebar = function (_a) {
    var children = _a.children;
    return _jsx("div", { className: styles.container, children: children });
};
Sidebar.NavSection = NavSection;
Sidebar.NavGroup = NavGroup;
Sidebar.NavItem = NavItem;
Sidebar.Footer = SidebarFooter;
