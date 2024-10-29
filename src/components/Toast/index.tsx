"use client";
import styles from "./styles.module.scss";
import { Icon, TIcons } from "@/components/Icon";
import { useEffect, useMemo, useState } from "react";

export interface ToastProps {
  message: string;
  timeout?: number;
  onClose?: () => void;
  icon?: TIcons;
  error?: boolean;
  success?: boolean;
  priority?: boolean;
  title?: string;
}

export function Toast({
  title: _title,
  message,
  timeout = 0,
  onClose,
  icon,
  error,
  success,
}: ToastProps) {
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const hideTimeout = setTimeout(() => {
      setHide(true);
    }, timeout);

    const closeTimeout = setTimeout(() => {
      onClose?.();
      setVisible(false);
    }, timeout + 300);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(closeTimeout);
    };
  }, []);

  const title = useMemo(() => {
    if (_title) return _title;
    if (error) return "Erro";
    if (success) return "Sucesso";
  }, [_title, success, error]);

  const iconName = useMemo(() => {
    if (error) return "close";
    if (success) return "check";

    return icon;
  }, [icon, error, success]);

  if (!visible) return null;

  const className = [
    styles.wrapper,
    hide && styles.hide,
    error && styles.error,
    success && styles.success,
  ].join(" ");

  //
  return (
    <div className={className}>
      {iconName && <Icon name={iconName} size={2} />}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.message}>{message}</span>
      </div>
      <div className={styles.progressWrapper}>
        <div
          className={styles.progress}
          style={{ "--toast-duration": `${timeout}ms` } as any}
        />
      </div>
    </div>
  );
}
