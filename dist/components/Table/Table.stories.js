"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWithPages = exports.TableWithActions = exports.TableWithCustomFields = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
exports.default = {
    component: _1.Table,
    subcomponents: {
        Header: _1.Header,
        Cell: _1.Cell.Text,
    },
};
const Basic = () => {
    return ((0, jsx_runtime_1.jsx)(_1.Table, { data: [
            {
                id: "1",
                name: "Lucas Costa Amaral",
                email: "lucas@splitwave.com.br",
            },
            { id: "2", name: "Thiago Nunes", email: "thiago@splitwave.com.br" },
            { id: "3", name: "Eduardo Souto", email: "eduardo@splitwave.com.br" },
            { id: "4", name: "Erika Nishimura", email: "erika@splitwave.com.br" },
        ], renderHeader: () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Header, { width: "80px", children: "#" }), (0, jsx_runtime_1.jsx)(_1.Header, { children: "Nome" }), (0, jsx_runtime_1.jsx)(_1.Header, { children: "E-mail" })] })), renderRow: (item) => {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Cell.Text, { children: item.id }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { children: item.name }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { children: item.email })] }));
        } }));
};
exports.Basic = Basic;
const TableWithCustomFields = () => {
    return ((0, jsx_runtime_1.jsx)(_1.Table, { data: [
            {
                date: "2024-09-28T15:30:00",
                orderId: "#9918202409280001",
                price: 349,
                product: "Camiseta",
            },
            {
                date: "2024-09-28T14:28:00",
                orderId: "#9918202409280002",
                price: 199,
                product: "Calça",
            },
            {
                date: "2024-09-28T13:12:00",
                orderId: "#9918202409280003",
                price: 29,
                product: "Boné",
            },
            {
                date: "2024-09-28T09:49:00",
                orderId: "#9918202409280004",
                price: 99,
                product: "Tênis",
            },
        ], keyExtractor: (item) => item.orderId, onRowClick: (item) => alert(`Clicked on ${item.product}`), renderHeader: () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Header.Date, { children: "Data" }), (0, jsx_runtime_1.jsx)(_1.Header.Uuid, { children: "C\u00F3digo" }), (0, jsx_runtime_1.jsx)(_1.Header, { children: "Valor" }), (0, jsx_runtime_1.jsx)(_1.Header, { children: "Produto" })] })), renderRow: (item) => {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Cell.Date, { children: item.date }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { shouldTruncateText: true, canCopy: true, children: item.orderId }), (0, jsx_runtime_1.jsx)(_1.Cell.Price, { children: item.price }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { children: item.product })] }));
        } }));
};
exports.TableWithCustomFields = TableWithCustomFields;
const TableWithActions = () => {
    const getVariant = (status) => {
        if (status === "Ativo")
            return "success";
        if (status === "Inativo")
            return "error";
    };
    return ((0, jsx_runtime_1.jsx)(_1.Table, { data: [
            {
                date: "2024-09-28T15:30:00",
                id: "#9918202409280001",
                url: "https://link.com/9918202409280001",
                status: "Ativo",
            },
            {
                date: "2024-09-28T14:28:00",
                id: "#9918202409280002",
                url: "https://link.com/9918202409280002",
                status: "Ativo",
            },
            {
                date: "2024-09-28T13:12:00",
                id: "#9918202409280003",
                url: "https://link.com/9918202409280003",
                status: "Inativo",
            },
            {
                date: "2024-09-28T09:49:00",
                id: "#9918202409280004",
                url: "https://link.com/9918202409280004",
                status: "Ativo",
            },
        ], renderHeader: () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Header.Date, { children: "Criado em" }), (0, jsx_runtime_1.jsx)(_1.Header.Uuid, { children: "Id" }), (0, jsx_runtime_1.jsx)(_1.Header, { minWidth: "150px", children: "Url" }), (0, jsx_runtime_1.jsx)(_1.Header, { width: "100px", children: "Status" }), (0, jsx_runtime_1.jsx)(_1.Header.Action, { isFixed: true, children: "A\u00E7\u00E3o" })] })), renderRow: (item) => {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Cell.Date, { children: item.date }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { shouldTruncateText: true, canCopy: true, children: item.id }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { shouldTruncateText: true, canCopy: true, children: item.url }), (0, jsx_runtime_1.jsx)(_1.Cell.Badge, { variant: getVariant(item.status), children: item.status }), (0, jsx_runtime_1.jsxs)(_1.Cell.Actions, { isFixed: true, renderTrigger: (props, ref) => {
                            return ((0, jsx_runtime_1.jsx)("button", { ref: ref, ...props, style: {
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "4px 8px",
                                    fontSize: "12px",
                                }, children: "A\u00E7\u00F5es" }));
                        }, children: [(0, jsx_runtime_1.jsx)(_1.Cell.ActionItem, { children: "Editar" }), (0, jsx_runtime_1.jsx)(_1.Cell.ActionItem, { children: "Deletar" })] })] }));
        } }));
};
exports.TableWithActions = TableWithActions;
const TableWithPages = () => {
    return ((0, jsx_runtime_1.jsx)(_1.Table, { data: [
            {
                id: "#001",
                product: "Camiseta",
                price: 49.99,
            },
            {
                id: "#002",
                product: "Calça",
                price: 99.99,
            },
            {
                id: "#003",
                product: "Boné",
                price: 19.99,
            },
            {
                id: "#004",
                product: "Tênis",
                price: 199.99,
            },
            {
                id: "#005",
                product: "Meia",
                price: 9.99,
            },
            {
                id: "#006",
                product: "Cinto",
                price: 29.99,
            },
            {
                id: "#007",
                product: "Relógio",
                price: 149.99,
            },
            {
                id: "#008",
                product: "Chapéu",
                price: 39.99,
            },
            {
                id: "#009",
                product: "Óculos",
                price: 79.99,
            },
            {
                id: "#010",
                product: "Bolsa",
                price: 199.99,
            },
        ], renderHeader: () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Header, { width: "80px", children: "Id" }), (0, jsx_runtime_1.jsx)(_1.Header, { children: "Produto" }), (0, jsx_runtime_1.jsx)(_1.Header, { children: "Pre\u00E7o" })] })), renderRow: (item) => {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_1.Cell.Text, { children: item.id }), (0, jsx_runtime_1.jsx)(_1.Cell.Text, { children: item.product }), (0, jsx_runtime_1.jsx)(_1.Cell.Price, { children: item.price })] }));
        } }));
};
exports.TableWithPages = TableWithPages;
