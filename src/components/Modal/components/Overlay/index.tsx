import { MouseEvent, MouseEventHandler } from "react";
import styles from "./styles.module.scss";

export interface ModalOverlayProps {
  onClose: any;
  children: React.ReactNode;
}

const Overlay = ({ children, onClose }: ModalOverlayProps) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (
      event.target instanceof HTMLDivElement &&
      event.target.classList.contains("overlay")
    ) {
      onClose();
    }
  };

  return (
    <div className={`${styles.overlay} overlay`} onMouseDown={handleClick}>
      {children}
    </div>
  );
};

export default Overlay;
