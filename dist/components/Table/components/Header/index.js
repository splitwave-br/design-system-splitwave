"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Date_1 = require("./Date");
const Uuid_1 = require("./Uuid");
const Action_1 = require("./Action");
const Header = ({ children, isFixed }) => {
    const className = [styles_module_scss_1.default.header, isFixed ? styles_module_scss_1.default.isFixed : ""].join(" ");
    return (0, jsx_runtime_1.jsx)("div", { className: className, children: children });
};
exports.Header = Header;
exports.Header.Date = Date_1.Date;
exports.Header.Uuid = Uuid_1.Uuid;
exports.Header.Action = Action_1.Action;
