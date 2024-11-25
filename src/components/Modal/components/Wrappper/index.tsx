import React from "react";
import { Icon } from "@/components/Icon";
import styles from "./styles.module.scss";
import { useModal } from "../../hooks/useModal";
import classnames from "classnames";

export interface ModalWrapperProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  onClose?: (...args: any) => void;
}

const Wrapper = ({
  className,
  children,
  title,
  onClose,
}: ModalWrapperProps) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal();
    onClose?.();
  };
  return (
    <div
      className={classnames(styles.wrapper, className)}
      onClick={(e) => e.stopPropagation()}
    >
      {title && (
        <div className={styles.header}>
          {
            onClose && (
            <button onClick={handleClose} className={styles.backBtn}>
              <Icon name="back" />
            </button>
            )
          }
          <span className={styles.title}>{title}</span>
          {
            onClose && (
              <button onClick={handleClose} className={styles.closeBtn}>
                <Icon size={"nano"} name="cancel" />
              </button>
            )
          }
        </div>
      )}
      {children}
    </div>
  );
};

export default Wrapper;
