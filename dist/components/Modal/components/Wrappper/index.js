"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = require("../../../../components/Icon");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const useModal_1 = require("../../hooks/useModal");
const classnames_1 = __importDefault(require("classnames"));
const Wrapper = ({ className, children, title, onClose, }) => {
    const { closeModal } = (0, useModal_1.useModal)();
    const handleClose = () => {
        closeModal();
        onClose?.();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(styles_module_scss_1.default.wrapper, className), onClick: (e) => e.stopPropagation(), children: [title && ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.header, children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleClose, className: styles_module_scss_1.default.backBtn, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: "back" }) }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.title, children: title }), (0, jsx_runtime_1.jsx)("button", { onClick: handleClose, className: styles_module_scss_1.default.closeBtn, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { size: "nano", name: "cancel" }) })] })), children] }));
};
exports.default = Wrapper;
