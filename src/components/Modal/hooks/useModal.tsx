'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Modal } from '..';
import useAdjustScrollbar from '@/hooks/useAdjustScrollbar';

interface ModalProviderProps {
  children: React.ReactNode;
}

interface IModalContextData {
  openModal: (component: ReactNode, onClose?: (...args: any) => void) => void;
  closeModal: (...args: any) => void;
}

interface IModal {
  id?: string;
  component: ReactNode;
  onClose?: (...args: any) => void;
}

const ModalContext = createContext({} as IModalContextData);

let id = 0;

function ModalProvider({ children }: ModalProviderProps) {
  const [modalQueue, setModalQueue] = useState<IModal[]>([]);

  const { handleRemoveScrollbar } = useAdjustScrollbar();

  useEffect(() => {
    handleRemoveScrollbar(modalQueue.length > 0);
  }, [handleRemoveScrollbar, modalQueue.length]);

  const openModal = (component: ReactNode, onClose?: () => void) => {
    id++;

    setModalQueue((prevQueue) => [
      ...prevQueue,
      { id: `modal-${id}`, component, onClose },
    ]);
  };

  const handleShift = (...args: any) => {
    let currentModal: IModal;

    const newQueue = [...modalQueue];

    if (newQueue.length === 0) {
      setModalQueue([]);
    }

    currentModal = newQueue[newQueue.length - 1];

    newQueue.pop();

    setModalQueue(newQueue);
    currentModal?.onClose?.(...args);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal: handleShift,
      }}
    >
      {children}

      {modalQueue.map((modal) => (
        <Modal.Overlay key={modal.id} onClose={handleShift}>
          {modal.component}
        </Modal.Overlay>
      ))}
    </ModalContext.Provider>
  );
}
function useModal(): IModalContextData {
  return useContext(ModalContext);
}

export { ModalProvider, useModal };
