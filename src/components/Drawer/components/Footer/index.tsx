import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export interface DrawerFooterProps {
  children: React.ReactNode;
  className?: string;
}

const Footer = ({ children, className }: DrawerFooterProps) => {
  return (
    <div className={classnames(styles.footer, className)}>
      {children}
    </div>
  );
};

export default Footer;
