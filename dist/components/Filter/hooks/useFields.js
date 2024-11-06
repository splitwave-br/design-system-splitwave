var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback } from "react";
var FilterFieldsContext = createContext(null);
export var useFilterFields = function () {
    var context = useContext(FilterFieldsContext);
    if (!context) {
        throw new Error("useFilterFields deve ser usado dentro de um FilterFieldsProvider");
    }
    return context;
};
export var FilterFieldsProvider = function (_a) {
    var children = _a.children;
    var _b = useState([]), fields = _b[0], setFields = _b[1];
    var registerField = useCallback(function (field) {
        setFields(function (prevFields) {
            if (!prevFields.includes(field)) {
                return __spreadArray(__spreadArray([], prevFields, true), [field], false);
            }
            return prevFields;
        });
    }, []);
    return (_jsx(FilterFieldsContext.Provider, { value: { registerField: registerField, fields: fields }, children: children }));
};
