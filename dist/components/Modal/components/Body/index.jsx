"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const ModalBody = ({ children, className }) => {
    const modalBodyStyles = [styles_module_scss_1.default.body, className].join(' ');
    return <div className={modalBodyStyles}>{children}</div>;
};
exports.default = ModalBody;
