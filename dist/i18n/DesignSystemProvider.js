"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
import { ptBR } from "./locales/ptBR";
var MessagesContext = createContext(ptBR);
var mergeMessages = function (locale, messages) {
    if (!messages)
        return locale;
    var sections = Object.keys(messages);
    return sections.reduce(function (merged, section) {
        var _a;
        return (__assign(__assign({}, merged), (_a = {}, _a[section] = __assign(__assign({}, locale[section]), messages[section]), _a)));
    }, locale);
};
export function DesignSystemProvider(_a) {
    var _b = _a.locale, locale = _b === void 0 ? ptBR : _b, messages = _a.messages, children = _a.children;
    var value = useMemo(function () { return mergeMessages(locale, messages); }, [locale, messages]);
    return (_jsx(MessagesContext.Provider, { value: value, children: children }));
}
// Interno da lib: sem provider, devolve o ptBR
export var useMessages = function () { return useContext(MessagesContext); };
