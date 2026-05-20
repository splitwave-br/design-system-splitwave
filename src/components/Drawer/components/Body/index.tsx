import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export interface DrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body = ({ children, className }: DrawerBodyProps) => {
  return (
    <div className={classnames(styles.body, className)}>
      {children}
    </div>
  );
};

export default Body;
