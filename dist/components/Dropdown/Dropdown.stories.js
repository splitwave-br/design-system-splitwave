"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
require("./Trigger/variables.scss");
exports.default = {
    title: "Components/Dropdown",
    tags: ["autodocs"],
    component: _1.Dropdown.Container,
};
const Template = () => ((0, jsx_runtime_1.jsxs)(_1.Dropdown.Container, { children: [(0, jsx_runtime_1.jsx)(_1.Dropdown.Trigger, { children: "Open Dropdown" }), (0, jsx_runtime_1.jsxs)(_1.Dropdown.Menu, { children: [(0, jsx_runtime_1.jsx)(_1.Dropdown.Item, { children: "Item 1" }), (0, jsx_runtime_1.jsx)(_1.Dropdown.Item, { children: "Item 2" }), (0, jsx_runtime_1.jsx)(_1.Dropdown.Item, { children: "Item 3" })] })] }));
exports.Default = Template.bind({});
exports.Default.args = {};
