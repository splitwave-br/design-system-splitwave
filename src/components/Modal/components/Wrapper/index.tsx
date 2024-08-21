import { Icon } from '@/components/Icon';
import styles from './styles.module.scss';
import { useModal } from '../../hooks/useModal';

interface OverlayProps {
  children: React.ReactNode;
  title?: string;
  onClose?: (...args: any) => void;
}

const Wrapper = ({ children, title, onClose }: OverlayProps) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal();
    onClose?.();
  };
  return (
    <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
      {title && (
        <div className={styles.header}>
          <button onClick={handleClose} className={styles.backBtn}>
            <Icon name='back' />
          </button>
          <span className={styles.title}>{title}</span>
          <button onClick={handleClose} className={styles.closeBtn}>
            <Icon size={'micro'} name='cancel' />
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default Wrapper;
