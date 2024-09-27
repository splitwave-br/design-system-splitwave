"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Dropdown_1 = require("@/components/Dropdown");
const useFields_1 = require("../../hooks/useFields");
const Container = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(useFields_1.FilterFieldsProvider, { children: (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Container, { children: children }) }));
};
exports.Container = Container;
