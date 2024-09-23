import React from "react";
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export default Menu;
