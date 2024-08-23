import { MouseEvent, MouseEventHandler } from 'react';
import styles from './styles.module.scss';

type OverlayProps = {
  onClose: any;
  children: React.ReactNode;
}

const Overlay = ({ children, onClose }: OverlayProps) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (
      event.target instanceof HTMLDivElement &&
      event.target.classList.contains('overlay')
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
