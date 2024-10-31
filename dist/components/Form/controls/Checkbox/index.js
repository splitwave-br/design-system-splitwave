"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const concatStyles_1 = require("../../../../utils/concatStyles");
const Checked_1 = __importDefault(require("../../../Filter/components/Checkboxes/components/Checked"));
const Unchecked_1 = __importDefault(require("../../../Filter/components/Checkboxes/components/Unchecked"));
exports.Checkbox = (0, react_1.forwardRef)(({ name, label, onChange, value }, ref) => {
    const isChecked = value;
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { onClick: (e) => {
                e.stopPropagation();
                onChange();
            }, children: (0, jsx_runtime_1.jsxs)("label", { htmlFor: name, className: styles_module_scss_1.default.field, children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, concatStyles_1.concatStyles)([
                            styles_module_scss_1.default.inputWrapper,
                            isChecked ? styles_module_scss_1.default.isChecked : '',
                        ]), children: [(0, jsx_runtime_1.jsx)("input", { className: styles_module_scss_1.default.checkbox, type: "checkbox", id: name, ref: ref, onChange: onChange, checked: isChecked }), isChecked ? (0, jsx_runtime_1.jsx)(Checked_1.default, {}) : (0, jsx_runtime_1.jsx)(Unchecked_1.default, {})] }), label && (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.label, children: label })] }) }) }, name));
});
exports.Checkbox.displayName = 'Checkbox';
