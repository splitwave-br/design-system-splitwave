import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { useModal } from "../../components/Modal/hooks/useModal";
import { Icon } from "../Icon";
import './variables.scss';
export var ConfirmationModal = function (_a) {
    var title = _a.title, confirmationText = _a.confirmationText, actionTitle = _a.actionTitle, description = _a.description, icon = _a.icon, actionVariant = _a.actionVariant, onConfirm = _a.onConfirm;
    var closeModal = useModal().closeModal;
    var handleClose = function () {
        closeModal();
    };
    var handleConfirm = function () {
        onConfirm();
        handleClose();
    };
    var iconStyles = [
        styles.icon,
        icon ? styles["variant-".concat(icon.variant)] : "",
    ].join(" ");
    return (_jsxs(Modal.Wrapper, { title: title, children: [_jsxs(Modal.Body, { className: styles.bodyWrapper, children: [icon && (_jsx("div", { className: iconStyles, children: _jsx(Icon, { name: icon.name }) })), _jsxs("div", { className: styles.textsWrapper, children: [actionTitle ? (_jsx("h3", { className: styles.actionTitle, children: actionTitle })) : null, description && _jsx("p", { className: styles.description, children: description })] })] }), _jsxs(Modal.Footer, { children: [_jsx(Button, { size: "large", onClick: handleClose, variant: "tertiary", children: "Cancelar" }), _jsx(Button, { size: "large", variant: actionVariant, onClick: handleConfirm, children: confirmationText })] })] }));
};
export default ConfirmationModal;
