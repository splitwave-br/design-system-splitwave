import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../utils/concatStyles";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div>
        <div className="light-theme" style={{ marginBottom: "1rem" }}>
          <h2>Light Theme</h2>
            <div
              ref={ref}
              className={concatStyles([styles.menu, className])}
              {...props}
            >
              {children}
          </div>
        </div>
        <div className="dark-theme" style={{ marginTop: 250 }}>
          <h2>Dark Theme</h2>
          <div style={{ background: "black", width: "max-content" }}>
            <div
              ref={ref}
              className={concatStyles([styles.menu, className])}
              {...props}
            >
              {children}
            </div>
          </div>
        </div>
    </div>
    );
  },
);

Menu.displayName = "Menu";

export default Menu;
