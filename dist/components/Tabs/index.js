"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Nav from "./components/nav/nav";
import Trigger from "./components/trigger/trigger";
import "./variables.scss";
export var Tabs = function (_a) {
    var tabs = _a.tabs, currentPath = _a.currentPath;
    return (_jsx(Nav, { children: tabs.map(function (tab) { return (_jsx(Trigger, { isDisabled: tab.isDisabled, path: tab.path, currentPath: currentPath, children: tab.label }, tab.path)); }) }));
};
