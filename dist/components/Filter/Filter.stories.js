"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortFilter = exports.FilterWithSelect = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const useFilter_1 = require("./hooks/useFilter");
exports.default = {
    title: "Components/Filter",
    component: _1.Filter.Wrapper,
    subcomponents: {
        "Filter.Container": _1.Filter.Container,
        "Filter.Button": _1.Filter.Button,
        "Filter.Content": _1.Filter.Content,
        "Filter.Field": _1.Filter.Field,
        "Filter.Select": _1.Filter.Select,
    },
    decorators: [
        (Story) => {
            const filterRegister = (0, useFilter_1.useFilter)({});
            return ((0, jsx_runtime_1.jsx)(_1.Filter.Wrapper, { register: filterRegister, children: (0, jsx_runtime_1.jsx)(Story, {}) }));
        },
    ],
};
const Basic = () => {
    return ((0, jsx_runtime_1.jsxs)(_1.Filter.Container, { children: [(0, jsx_runtime_1.jsx)(_1.Filter.Button, { children: "Email" }), (0, jsx_runtime_1.jsx)(_1.Filter.Content, { children: (0, jsx_runtime_1.jsx)(_1.Filter.Field, { field: "email", label: "E-mail" }) })] }));
};
exports.Basic = Basic;
const FilterWithSelect = () => {
    const ROLES = [
        { label: "Administrador", value: "master" },
        { label: "Lojista", value: "admin" },
        { label: "Não Aprovado", value: "default" },
    ];
    return ((0, jsx_runtime_1.jsxs)(_1.Filter.Container, { children: [(0, jsx_runtime_1.jsx)(_1.Filter.Button, { children: "Permiss\u00E3o" }), (0, jsx_runtime_1.jsx)(_1.Filter.Content, { children: (0, jsx_runtime_1.jsx)(_1.Filter.Select, { label: "Permiss\u00E3o", getLabel: (item) => item.label, getValue: (item) => item.value, field: "role", options: ROLES }) })] }));
};
exports.FilterWithSelect = FilterWithSelect;
const SortFilter = () => {
    return ((0, jsx_runtime_1.jsxs)(_1.Filter.Container, { children: [(0, jsx_runtime_1.jsx)(_1.Filter.Button
            // TODO: Add sort icon
            // icon={() => <Icon name="sort" size={1} />}
            , { children: "Ordem" }), (0, jsx_runtime_1.jsx)(_1.Filter.Sort, { getLabel: (item) => item.label, getValue: (item) => item.value, field: "orderByField", options: [
                    { label: "Alfabética", value: "client-asc" },
                    "divider",
                    { label: "Total em vendas (crescente)", value: "totalSales-asc" },
                    {
                        label: "Total em vendas (decrescente)",
                        value: "totalSales-desc",
                    },
                    "divider",
                    {
                        label: "Lucro do gateway (crescente)",
                        value: "profitGateway-asc",
                    },
                    {
                        label: "Lucro do gateway (decrescente)",
                        value: "profitGateway-desc",
                    },
                    "divider",
                    { label: "Reserva financeira (crescente)", value: "reserve-asc" },
                    {
                        label: "Reserva financeira (decrescente)",
                        value: "reserve-desc",
                    },
                ] })] }));
};
exports.SortFilter = SortFilter;
