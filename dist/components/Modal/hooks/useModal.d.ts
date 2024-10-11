import React, { ReactNode } from 'react';
interface ModalProviderProps {
    children: React.ReactNode;
}
interface IModalContextData {
    openModal: (component: ReactNode, onClose?: (...args: any) => void) => void;
    closeModal: (...args: any) => void;
}
declare function ModalProvider({ children }: ModalProviderProps): import("react/jsx-runtime").JSX.Element;
declare function useModal(): IModalContextData;
export { ModalProvider, useModal };
