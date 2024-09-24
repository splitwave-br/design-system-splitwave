"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("..");
exports.default = {
    title: "Components/Dropdown/Menu",
    component: __1.Dropdown.Menu,
    parameters: {
        docs: {
            description: {
                component: "Another description, overriding the comments",
            },
        },
    },
};
exports.Default = {
    args: {
        children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(__1.Dropdown.Item, { children: "Item 1" }), (0, jsx_runtime_1.jsx)(__1.Dropdown.Item, { children: "Item 2" }), (0, jsx_runtime_1.jsx)(__1.Dropdown.Item, { children: "Item 3" }), (0, jsx_runtime_1.jsx)(__1.Dropdown.Item, { children: "Item 4" }), (0, jsx_runtime_1.jsx)(__1.Dropdown.Item, { children: "Item 5" })] })),
    },
};
