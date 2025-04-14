import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
// import classnames from 'classnames';
// import { Icon } from '../../../../components/Icon';
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "../../../../components/Icon";
import { Input } from "../../../../components/Form/controls/Input";
import { useDebounceValue } from "../../../../hooks/useDebounceValue";
export var paginationMask = function (value, totalPages) {
    var digitsOnly = value.replace(/\D/g, "");
    if (!digitsOnly)
        return "";
    var numericValue = Number(digitsOnly);
    if (numericValue > totalPages)
        return String(totalPages);
    return String(numericValue);
};
export var Pagination = function (_a) {
    var totalPages = _a.totalPages, handlePageInputChange = _a.handlePageInputChange, handleClickPrevPage = _a.handleClickPrevPage, handleClickNextPage = _a.handleClickNextPage, currentPage = _a.currentPage;
    var isTyping = useRef(false);
    var pages = useMemo(function () {
        return Array.from({ length: totalPages }, function (_, index) { return index; });
    }, [totalPages]);
    var isPrevDisabled = useMemo(function () { return currentPage === 0 || pages.length === 0; }, [pages, currentPage]);
    var isNextDisabled = useMemo(function () { return currentPage === pages.length - 1 || pages.length === 0; }, [pages, currentPage]);
    var _b = useState(String(currentPage + 1)), inputValue = _b[0], setInputValue = _b[1];
    var debouncedInput = useDebounceValue(inputValue, { delay: 500 });
    useEffect(function () {
        var page = Number(debouncedInput);
        var isValid = !isNaN(page) && page > 0 && page <= totalPages;
        if (isTyping.current && isValid && page !== currentPage + 1) {
            handlePageInputChange(page);
            isTyping.current = false;
        }
    }, [debouncedInput, currentPage, handlePageInputChange, totalPages]);
    useEffect(function () {
        var next = String(currentPage + 1);
        if (!isTyping.current && inputValue !== next) {
            setInputValue(next);
        }
    }, [currentPage]);
    var handleInputChange = function (value) {
        isTyping.current = true;
        var validatedValue = paginationMask(value, totalPages);
        setInputValue(validatedValue);
    };
    return (_jsxs("div", { className: styles.wrapper, children: [_jsxs("button", { onClick: handleClickPrevPage, className: styles.button, disabled: isPrevDisabled, children: [_jsx(Icon, { name: "arrow-left", size: 2 }), _jsx("span", { children: "Anterior" })] }), _jsxs("div", { className: styles.pages, children: [_jsx("span", { children: "P\u00E1gina" }), _jsx(Input, { wrapperStyles: styles.inputWrapper, placeholder: "1", size: inputValue.length || 1, maxLength: String(totalPages).length, onBlur: function () {
                            isTyping.current = false;
                            setInputValue(String(currentPage + 1));
                        }, onChange: function (e) { return handleInputChange(e.target.value); }, value: inputValue }), _jsxs("span", { children: ["de ", totalPages] })] }), _jsxs("button", { className: styles.button, onClick: handleClickNextPage, disabled: isNextDisabled, children: [_jsx("span", { children: "Pr\u00F3ximo" }), _jsx(Icon, { name: "arrow-right", size: 2 })] })] }));
};
