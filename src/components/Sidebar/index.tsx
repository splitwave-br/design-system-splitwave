import { NavSection } from "./components/NavSection";
import { NavGroup } from "./components/NavGroup";
import { NavItem } from "./components/NavItem";
import "./variables.scss";
import styles from "./styles.module.scss";
import { SidebarFooter } from "./components/Footer";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return <div className={styles.container}>{children}</div>;
};

Sidebar.NavSection = NavSection;
Sidebar.NavGroup = NavGroup;
Sidebar.NavItem = NavItem;
Sidebar.Footer = SidebarFooter
