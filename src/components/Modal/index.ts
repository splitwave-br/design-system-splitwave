import Overlay from "./components/Overlay";
export { ModalOverlayProps } from "./components/Overlay";

import Footer from "./components/Footer";
export { ModalFooterProps } from "./components/Footer";

import Wrapper from "./components/Wrappper";
export { ModalWrapperProps } from "./components/Wrappper";

import ModalBody from "./components/Body";
export { ModalBodyProps } from "./components/Body";

import ModalDivider from "./components/Divider";

export const Modal = {
  Overlay,
  Footer,
  Wrapper,
  Body: ModalBody,
  Divider: ModalDivider,
};
