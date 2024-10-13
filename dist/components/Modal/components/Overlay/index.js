"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Overlay = ({ children, onClose }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        if (event.target instanceof HTMLDivElement &&
            event.target.classList.contains("overlay")) {
            onClose();
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `${styles_module_scss_1.default.overlay} overlay`, onMouseDown: handleClick, children: children }));
};
exports.default = Overlay;
