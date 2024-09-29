"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Skeleton = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.wrapper, children: (0, jsx_runtime_1.jsx)("span", {}) }));
};
exports.Skeleton = Skeleton;
