import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
// import classnames from 'classnames';
// import { Icon } from '../../../../components/Icon';
import { useMemo } from "react";
import { Select } from "../../../../components/Form/controls/Select";
import { Icon } from "../../../../components/Icon";
export var Pagination = function (_a) {
    var totalPages = _a.totalPages, handleClickOnPage = _a.handleClickOnPage, handleClickPrevPage = _a.handleClickPrevPage, handleClickNextPage = _a.handleClickNextPage, currentPage = _a.currentPage;
    var pages = useMemo(function () {
        return Array.from({ length: totalPages }, function (_, index) { return index; });
    }, [totalPages]);
    var isPrevDisabled = useMemo(function () { return currentPage === 0 || pages.length === 0; }, [pages, currentPage]);
    var isNextDisabled = useMemo(function () { return currentPage === pages.length - 1 || pages.length === 0; }, [pages, currentPage]);
    return (_jsxs("div", { className: styles.wrapper, children: [_jsxs("button", { onClick: handleClickPrevPage, className: styles.button, disabled: isPrevDisabled, children: [_jsx(Icon, { name: "arrow-left", size: 2 }), _jsx("span", { children: "Anterior" })] }), _jsxs("div", { className: styles.pages, children: [_jsx("span", { children: "P\u00E1gina" }), _jsx(Select, { size: 1, direction: "top", options: Array.from({ length: totalPages }, function (_, index) {
                            return String(index + 1);
                        }), getLabel: function (o) { return o; }, getValue: function (o) { return o; }, placeholder: "0", onChange: function (value) { return handleClickOnPage(Number(value)); }, value: String(currentPage + 1) }), _jsxs("span", { children: ["de ", pages.length] })] }), _jsxs("button", { className: styles.button, onClick: handleClickNextPage, disabled: isNextDisabled, children: [_jsx("span", { children: "Pr\u00F3ximo" }), _jsx(Icon, { name: "arrow-right", size: 2 })] })] }));
};
