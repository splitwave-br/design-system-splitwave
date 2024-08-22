"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Overlay = ({ children, onClose }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        if (event.target instanceof HTMLDivElement &&
            event.target.classList.contains('overlay')) {
            onClose();
        }
    };
    return (<div className={`${styles_module_scss_1.default.overlay} overlay`} onMouseDown={handleClick}>
      {children}
    </div>);
};
exports.default = Overlay;
