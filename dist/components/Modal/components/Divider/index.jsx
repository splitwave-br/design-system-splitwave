"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const react_1 = __importDefault(require("react"));
require("./variables.scss");
const ModalDivider = () => {
    return <div className={styles_module_scss_1.default.divider}/>;
};
exports.default = ModalDivider;
