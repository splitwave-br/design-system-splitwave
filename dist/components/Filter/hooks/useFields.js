"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterFieldsProvider = exports.useFilterFields = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FilterFieldsContext = (0, react_1.createContext)(null);
const useFilterFields = () => {
    const context = (0, react_1.useContext)(FilterFieldsContext);
    if (!context) {
        throw new Error("useFilterFields deve ser usado dentro de um FilterFieldsProvider");
    }
    return context;
};
exports.useFilterFields = useFilterFields;
const FilterFieldsProvider = ({ children, }) => {
    const [fields, setFields] = (0, react_1.useState)([]);
    const registerField = (0, react_1.useCallback)((field) => {
        setFields((prevFields) => {
            if (!prevFields.includes(field)) {
                return [...prevFields, field];
            }
            return prevFields;
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(FilterFieldsContext.Provider, { value: { registerField, fields }, children: children }));
};
exports.FilterFieldsProvider = FilterFieldsProvider;
