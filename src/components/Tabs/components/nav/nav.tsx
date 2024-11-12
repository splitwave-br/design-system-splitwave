"use client";

import styles from "./styles.module.scss";
const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>{children}</div>
    </div>
  );
};

export default Nav;
