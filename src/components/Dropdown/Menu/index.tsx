import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../utils/concatStyles";
import "./variables.scss";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={concatStyles([styles.menu, className])}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Menu.displayName = "Menu";

export default Menu;
