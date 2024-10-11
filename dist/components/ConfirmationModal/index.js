"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Modal_1 = require("../../components/Modal");
const Button_1 = require("../../components/Button");
const useModal_1 = require("../../components/Modal/hooks/useModal");
const Icon_1 = require("../Icon");
const ConfirmationModal = ({ title, confirmationText, actionTitle, description, icon, actionVariant, onConfirm, }) => {
    const { closeModal } = (0, useModal_1.useModal)();
    const handleClose = () => {
        closeModal();
    };
    const handleConfirm = () => {
        onConfirm();
        handleClose();
    };
    const iconStyles = [
        styles_module_scss_1.default.icon,
        icon ? styles_module_scss_1.default[`variant-${icon.variant}`] : "",
    ].join(" ");
    return ((0, jsx_runtime_1.jsxs)(Modal_1.Modal.Wrapper, { title: title, children: [(0, jsx_runtime_1.jsxs)(Modal_1.Modal.Body, { className: styles_module_scss_1.default.bodyWrapper, children: [icon && ((0, jsx_runtime_1.jsx)("div", { className: iconStyles, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: icon.name }) })), (0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.textsWrapper, children: [actionTitle ? ((0, jsx_runtime_1.jsx)("h3", { className: styles_module_scss_1.default.actionTitle, children: actionTitle })) : null, description && (0, jsx_runtime_1.jsx)("p", { className: styles_module_scss_1.default.description, children: description })] })] }), (0, jsx_runtime_1.jsxs)(Modal_1.Modal.Footer, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleClose, variant: "outline", children: "Cancelar" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { variant: actionVariant, onClick: handleConfirm, children: confirmationText })] })] }));
};
exports.ConfirmationModal = ConfirmationModal;
exports.default = exports.ConfirmationModal;
