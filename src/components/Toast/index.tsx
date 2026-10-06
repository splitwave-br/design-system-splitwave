import { useEffect, useMemo, useState } from "react";
import { Icon, TIcons } from "@/components/Icon";
import styles from "./styles.module.scss";
import "./variables.scss";
import { useMessages } from "@/i18n";

export enum PresetEnum {
  Error = "error",
  Success = "success",
}

type PresetIconsType = {
  [PresetEnum.Error]: TIcons;
  [PresetEnum.Success]: TIcons;
};

const PresetIcons: PresetIconsType = {
  [PresetEnum.Error]: "close",
  [PresetEnum.Success]: "check",
};

export interface ToastProps {
  message: string;
  timeout?: number;
  onClose?: () => void;
  icon?: TIcons;
  title?: string;
  preset?: PresetEnum;
}

export function Toast({
  title: _title,
  message,
  timeout = 0,
  onClose,
  icon,
  preset,
}: ToastProps) {
  const messages = useMessages();
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      setHide(true);
    }, timeout);

    const closeTimeout = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, timeout + 300);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(closeTimeout);
    };
  }, []);

  const title = useMemo(() => {
    if (_title) return _title;
    return preset && messages.toast[preset];
  }, [_title, preset, messages]);

  const iconName = useMemo(() => {
    if (icon) return icon;
    return preset && PresetIcons[preset];
  }, [icon, preset]);

  if (!visible) return null;

  const className = [
    styles.wrapper,
    hide && styles.hide,
    preset && styles[preset],
  ].join(" ");

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
