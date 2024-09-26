"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Success = exports.Danger = exports.Outline = exports.Tertiary = exports.Secondary = exports.Default = void 0;
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
        name: "Button Secondary",
        variant: "secondary",
        children: "Secondary",
    },
};
exports.Tertiary = {
    args: {
        name: "Button Tertiary",
        variant: "tertiary",
        children: "Tertiary",
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
        name: "Button Danger",
        variant: "danger",
        children: "Danger",
    },
};
exports.Success = {
    args: {
        name: "Button Success",
        variant: "success",
        children: "Success",
    },
};
exports.Text = {
    args: {
        name: "Button Text",
        variant: "text",
        children: "Text",
    },
};
