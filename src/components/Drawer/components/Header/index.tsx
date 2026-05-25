'use client';

import React from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { Icon } from '@/components/Icon';
import { useDrawer } from '../../hooks/useDrawer';

export interface DrawerHeaderProps {
  title: string;
  onClose?: (...args: any) => void;
  className?: string;
}

const Header = ({ title, onClose, className }: DrawerHeaderProps) => {
  const { closeDrawer } = useDrawer();

  const handleClose = () => {
    closeDrawer();
    onClose?.();
  };

  return (
    <div className={classnames(styles.header, className)}>
      <button className={styles.backBtn} onClick={handleClose}>
        <Icon name="back" />
      </button>
      <span className={styles.title}>{title}</span>
      <button className={styles.closeBtn} onClick={handleClose}>
        <Icon size="nano" name="cancel" />
      </button>
    </div>
  );
};

export default Header;
