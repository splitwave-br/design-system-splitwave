import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

type TProps = {
  children: ReactNode;
  showMenu?: boolean;
};

export const ThemePreview = ({ children, showMenu  }: TProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={classnames("light-theme", styles.lightTheme)}>
        <h2 className={styles.title}>Light Theme</h2>
        {children}
      </div>
      <div
        style={{ marginTop: showMenu ? 200 : 0}}
        className={classnames("dark-theme", styles.darkTheme)}
      >
        <h2 className={styles.title}>Dark Theme</h2>
        {children}
      </div>
    </div>
  );
};
