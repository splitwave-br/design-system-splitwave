import styles from "./styles.module.scss";
import { Modal } from "@/components/Modal";
import { Button, TButtonVariants } from "@/components/Button";
import { useModal } from "@/components/Modal/hooks/useModal";
import { Icon, TIcons } from "../Icon";
import './variables.scss'


interface TConfirmationModalIcon {
  name: TIcons;
  variant: "default" | "danger";
}

export interface ConfirmationModalProps {
  onConfirm: any;
  title: string;
  icon?: TConfirmationModalIcon;
  actionTitle?: string;
  description?: string;
  confirmationText: string;
  actionVariant?: TButtonVariants;
}

export const ConfirmationModal = ({
  title,
  confirmationText,
  actionTitle,
  description,
  icon,
  actionVariant,
  onConfirm,
}: ConfirmationModalProps) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const iconStyles = [
    styles.icon,
    icon ? styles[`variant-${icon.variant}`] : "",
  ].join(" ");
  
  return (
    <Modal.Wrapper title={title}>
      <Modal.Body className={styles.bodyWrapper}>
        {icon && (
          <div className={iconStyles}>
            <Icon name={icon.name} />
          </div>
        )}
        <div className={styles.textsWrapper}>
          {actionTitle ? (
            <h3 className={styles.actionTitle}>{actionTitle}</h3>
          ) : null}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button size="large" onClick={handleClose} variant="tertiary">
          Cancelar
        </Button>
        <Button  size="large" variant={actionVariant} onClick={handleConfirm}>
          {confirmationText}
        </Button>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default ConfirmationModal;
