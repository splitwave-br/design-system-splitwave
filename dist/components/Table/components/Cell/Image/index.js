"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
// It can be used only inside the Cell component
const Image = ({ src }) => {
    return (0, jsx_runtime_1.jsx)("img", { className: styles_module_scss_1.default.img, src: src });
};
exports.Image = Image;
