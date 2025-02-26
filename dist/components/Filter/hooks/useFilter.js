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
import { createContext, useCallback, useContext, useMemo, useState, } from "react";
import { get } from "../../../utils/get";
function useFilter(_a) {
    var _normalize = _a.normalize;
    var _b = useState({}), filter = _b[0], setFilter = _b[1];
    // TODO: We can remove it after implement the filter on the backend
    var applyFilter = useCallback(function (data) {
        if (Object.keys(filter).length === 0)
            return data;
        return data.filter(function (item) {
            return Object.entries(filter).every(function (_a) {
                var key = _a[0], value = _a[1];
                var normalize = _normalize && (_normalize === null || _normalize === void 0 ? void 0 : _normalize[key]);
                var itemValue = normalize
                    ? normalize(get(item, key))
                    : get(item, key);
                var filterValue = normalize ? normalize(value) : value;
                if (!!itemValue) {
                    return itemValue.toLowerCase().includes(filterValue.toLowerCase());
                }
                return true;
            });
        });
    }, [filter]);
    var handlesetFilter = useCallback(function (field, value) {
        setFilter(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    }, [setFilter]);
    var getIsActive = useCallback(function (fields) {
        return fields.some(function (field) { return !!filter[field]; });
    }, [filter]);
    var getValue = useCallback(function (field) { return filter[field]; }, [filter]);
    var clean = useCallback(function (fields) {
        setFilter(function (prev) {
            var newFilter = __assign({}, prev);
            fields.forEach(function (field) {
                delete newFilter[field];
            });
            return newFilter;
        });
    }, [setFilter]);
    var cleanAll = useCallback(function () {
        setFilter({});
    }, [setFilter]);
    var normalizedFilter = useMemo(function () {
        var normalized = {};
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!value)
                return;
            var normalize = _normalize && (_normalize === null || _normalize === void 0 ? void 0 : _normalize[key]);
            normalized[key] = normalize ? normalize(value) : value;
        });
        return normalized;
    }, [filter]);
    return {
        filter: filter,
        normalizedFilter: normalizedFilter,
        setFilter: handlesetFilter,
        applyFilter: applyFilter,
        getIsActive: getIsActive,
        getValue: getValue,
        clean: clean,
        cleanAll: cleanAll,
    };
}
var FilterContext = createContext({});
function FilterProvider(_a) {
    var children = _a.children, register = _a.register;
    return (_jsx(FilterContext.Provider, { value: __assign({}, register), children: children }));
}
function useFilterContext() {
    return useContext(FilterContext);
}
export { FilterProvider, useFilter, useFilterContext };
