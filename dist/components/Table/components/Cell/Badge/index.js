"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Badge_1 = require("../../../../../components/Badge");
const Badge = ({ children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Badge_1.Badge, { ...props, children: children }) }));
};
exports.Badge = Badge;
