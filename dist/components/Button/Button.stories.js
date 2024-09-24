"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Success = exports.Danger = exports.Outline = exports.Secondary = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Button,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {
    args: {
        children: "Button",
    },
};
exports.Secondary = {
    args: {
        name: "Button Ouline",
        variant: "secondary",
        children: "Secondary",
    },
};
exports.Outline = {
    args: {
        name: "Button Ouline",
        variant: "outline",
        children: "Outline",
    },
};
exports.Danger = {
    args: {
        name: "Button Ouline",
        variant: "danger",
        children: "Danger",
    },
};
exports.Success = {
    args: {
        name: "Button Ouline",
        variant: "success",
        children: "Success",
    },
};
exports.Text = {
    args: {
        name: "Button Ouline",
        variant: "text",
        children: "Text",
    },
};
