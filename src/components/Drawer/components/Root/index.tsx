import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import '../../variables.scss';

export interface DrawerRootProps {
  children: React.ReactNode;
  className?: string;
}

const Root = ({ children, className }: DrawerRootProps) => {
  return (
    <div className={classnames(styles.root, className)}>
      {children}
    </div>
  );
};

export default Root;
