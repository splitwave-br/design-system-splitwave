import React from "react";
export interface ModalWrapperProps {
    className?: string;
    children: React.ReactNode;
    title?: string;
    onClose?: (...args: any) => void;
}
declare const Wrapper: ({ className, children, title, onClose, }: ModalWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default Wrapper;
