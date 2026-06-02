'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import '../../variables.scss';
import type { IDrawerEntry } from '../../hooks/useDrawer';

interface DrawerPortalEntryProps {
  entry: IDrawerEntry;
  index: number;
  totalCount: number;
  onClose: (...args: any) => void;
}

function DrawerPortalEntry({
  entry,
  index,
  totalCount,
  onClose,
}: DrawerPortalEntryProps) {
  const [visible, setVisible] = useState(false);
  const depth = totalCount - 1 - index;
  const isTop = depth === 0;

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const dataState =
    !visible || entry.state === 'closing' ? 'hidden' : 'visible';

  const handleOverlayClick = () => {
    if (isTop && entry.options?.closeOnOverlayClick !== false) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={styles.overlay}
        data-state={dataState}
        data-clickable={String(isTop && entry.options?.closeOnOverlayClick !== false)}
        style={{
          zIndex: `calc(var(--z-drawer-base) + ${index} * var(--z-drawer-step))`,
        }}
        onMouseDown={handleOverlayClick}
      />
      <div
        className={styles.drawerWrapper}
        data-state={dataState}
        data-size={entry.options?.size ?? 'md'}
        style={
          {
            zIndex: `calc(var(--z-drawer-base) + ${index} * var(--z-drawer-step) + 1)`,
            '--drawer-depth': depth,
          } as React.CSSProperties
        }
        onClick={(e) => e.stopPropagation()}
      >
        {entry.component}
      </div>
    </>
  );
}

export default DrawerPortalEntry;
