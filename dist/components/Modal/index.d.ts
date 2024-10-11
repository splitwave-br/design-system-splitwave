export { ModalOverlayProps } from "./components/Overlay";
export { ModalFooterProps } from "./components/Footer";
export { ModalWrapperProps } from "./components/Wrappper";
export { ModalBodyProps } from "./components/Body";
export declare const Modal: {
    Overlay: ({ children, onClose }: import("./components/Overlay").ModalOverlayProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children }: import("./components/Footer").ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
    Wrapper: ({ className, children, title, onClose, }: import("./components/Wrappper").ModalWrapperProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className }: import("./components/Body").ModalBodyProps) => import("react/jsx-runtime").JSX.Element;
    Divider: () => import("react/jsx-runtime").JSX.Element;
};
