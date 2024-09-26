"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProvider = FilterProvider;
exports.useFilter = useFilter;
exports.useFilterContext = useFilterContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const get_1 = require("src/utils/get");
function useFilter(config) {
    const [filter, setFilter] = (0, react_1.useState)({});
    // TODO: We can remove it after implement the filter on the backend
    const applyFilter = (0, react_1.useCallback)((data) => {
        if (Object.keys(filter).length === 0)
            return data;
        return data.filter((item) => {
            return Object.entries(filter).every(([key, value]) => {
                const normalize = config?.normalize && config?.normalize?.[key];
                const itemValue = normalize
                    ? normalize((0, get_1.get)(item, key))
                    : (0, get_1.get)(item, key);
                const filterValue = normalize ? normalize(value) : value;
                if (!!itemValue) {
                    return itemValue.toLowerCase().includes(filterValue.toLowerCase());
                }
                return true;
            });
        });
    }, [filter]);
    const handlesetFilter = (0, react_1.useCallback)((field, value) => {
        setFilter((prev) => ({ ...prev, [field]: value }));
    }, [setFilter]);
    const getIsActive = (0, react_1.useCallback)((fields) => {
        return fields.some((field) => !!filter[field]);
    }, [filter]);
    const getValue = (0, react_1.useCallback)((field) => filter[field], [filter]);
    const clean = (0, react_1.useCallback)((fields) => {
        setFilter((prev) => {
            const newFilter = { ...prev };
            fields.forEach((field) => {
                delete newFilter[field];
            });
            return newFilter;
        });
    }, [setFilter]);
    const cleanAll = (0, react_1.useCallback)(() => {
        setFilter({});
    }, [setFilter]);
    const normalizedFilter = (0, react_1.useMemo)(() => {
        const normalized = {};
        Object.entries(filter).forEach(([key, value]) => {
            if (!value)
                return;
            const normalize = config?.normalize && config?.normalize?.[key];
            normalized[key] = normalize ? normalize(value) : value;
        });
        return normalized;
    }, [filter]);
    return {
        filter,
        normalizedFilter,
        setFilter: handlesetFilter,
        applyFilter,
        getIsActive,
        getValue,
        clean,
        cleanAll,
    };
}
const FilterContext = (0, react_1.createContext)({});
function FilterProvider({ children, register }) {
    return ((0, jsx_runtime_1.jsx)(FilterContext.Provider, { value: { ...register }, children: children }));
}
function useFilterContext() {
    return (0, react_1.useContext)(FilterContext);
}
