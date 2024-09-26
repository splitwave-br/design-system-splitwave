"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useFilter_1 = require("../../hooks/useFilter");
const Wrapper = ({ children, register }) => {
    return (0, jsx_runtime_1.jsx)(useFilter_1.FilterProvider, { register: register, children: children });
};
exports.Wrapper = Wrapper;
