"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Dropdown_1 = require("../../../../../components/Dropdown");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Actions = ({ children, renderTrigger, isFixed, onClick }) => {
    return ((0, jsx_runtime_1.jsx)("div", { onClick: onClick, className: isFixed ? styles_module_scss_1.default.isFixed : "", children: (0, jsx_runtime_1.jsxs)(Dropdown_1.Dropdown.Container, { children: [(0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Trigger, { children: renderTrigger }), (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Menu, { children: children })] }) }));
};
exports.Actions = Actions;
