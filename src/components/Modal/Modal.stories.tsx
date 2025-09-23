import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@/components/Button";
import { ModalProvider, useModal } from "./hooks/useModal"; // Ajuste o caminho conforme necessário
import { Modal } from "./index";
import ConfirmationModal from "../ConfirmationModal"; // Ajuste o caminho conforme necessário
import { ThemePreview } from "../ThemePreview";

export default {
  title: "Components/Modal",
  component: Modal.Wrapper,
  decorators: [
    (Story) => (
      <ThemePreview>
      <ModalProvider>
        <Story />
      </ModalProvider>
      </ThemePreview>
    ),
  ],
} as Meta;

const Template: StoryFn = () => {
  const { openModal, closeModal } = useModal();
  return (
    <div>
      <Button onClick={() => openModal(<ModalContent />, closeModal)}>
        Open Modal
      </Button>
    </div>
  );
};

const ModalContent = () => {
  const { closeModal } = useModal();

  return (
    <Modal.Wrapper title="Basic Modal">
      <Modal.Body>
        <p>
          This is the modal content. Click anywhere outside this modal to close.
        </p>
        <Modal.Divider />
        <Modal.Footer>
          <Button onClick={() => closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal.Wrapper>
  );
};

export const BasicModal: StoryFn = () => {
  const { closeModal } = useModal();

  return (
    <Modal.Wrapper title="Basic Modal">
      <Modal.Body>
        <p>
          This is the modal content. Click anywhere outside this modal to close.
        </p>
        <Modal.Divider />
        <Modal.Footer>
          <Button onClick={() => closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal.Wrapper>
  );
};

export const ModalWithFooterActions: StoryFn = () => {
  return (
    <div>
      <Modal.Wrapper title="Modal with actions">
        <Modal.Body>
          <p>Modal with custom footer actions.</p>
          <Modal.Divider />
          <Modal.Footer>
            <Button variant="tertiary" onClick={useModal().closeModal}>
              Cancel
            </Button>
            <Button>Confirm</Button> {/* Confirm does not close the modal */}
          </Modal.Footer>
        </Modal.Body>
      </Modal.Wrapper>
    </div>
  );
};

const FooterActionsModalContent = () => (
  <Modal.Wrapper title="Modal with actions">
    <Modal.Body>
      <p>Modal with custom footer actions.</p>
      <Modal.Divider />
      <Modal.Footer>
        <Button variant="tertiary" onClick={useModal().closeModal}>
          Cancel
        </Button>
        <Button>Confirm</Button> {/* Confirm does not close the modal */}
      </Modal.Footer>
    </Modal.Body>
  </Modal.Wrapper>
);

export const BasicConfirmationModal: StoryFn = () => {
  return (
    <div>
      <ConfirmationModal
        icon={{
          name: "transfer",
          variant: "danger",
        }}
        title="Are you sure?"
        confirmationText="Confirm"
        actionTitle="Delete Item"
        description="This action cannot be undone."
        actionVariant="danger"
        onConfirm={() => {
          console.log("Confirmation");
        }}
      />
    </div>
  );
};

export const BasicOpenModal: StoryFn = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <ConfirmationModal
        icon={{
          name: "money-up",
          variant: "danger",
        }}
        title="Are you sure?"
        confirmationText="Confirm"
        actionTitle="Delete Item"
        description="This action cannot be undone."
        actionVariant="danger"
        onConfirm={() => {
          console.log("onConfirm");
        }}
      />,
    );
  };

  return (
    <div style={{ height: "450px" }}>
      <Button onClick={handleOpenModal}>Abrir modal</Button>
    </div>
  );
};
