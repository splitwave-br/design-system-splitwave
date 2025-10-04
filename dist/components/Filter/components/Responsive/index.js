"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo, useState } from "react";
import styles from "./styles.module.scss";
import { Icon } from "../../../../components/Icon";
import { concatStyles } from "../../../../utils/concatStyles";
import { useFilterContext } from "../../hooks/useFilter";
import { Button } from "../../../../components/Button";
import useWindowSize from "../../../../hooks/useWindowSize";
export var Responsive = function (_a) {
    var children = _a.children, wrapperFiltersClassName = _a.wrapperFiltersClassName, wrapperFiltersContentClassName = _a.wrapperFiltersContentClassName;
    var isMobile = useWindowSize().isMobile;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useFilterContext(), filter = _c.filter, getIsActive = _c.getIsActive, cleanAll = _c.cleanAll;
    var renderChildren = useMemo(function () {
        return React.Children.map(children, function (c) {
            if (!React.isValidElement(c) || !c)
                return;
            var child = c;
            if (isMobile && typeof child.props.shouldEjectOnMobile !== "undefined")
                return null;
            return React.cloneElement(child, {
                shouldEjectOnMobile: true,
                shouldPortal: isMobile ? false : true,
            });
        });
    }, [children, isMobile]);
    var renderNotEjectedChildren = useMemo(function () {
        if (!isMobile)
            return null;
        return React.Children.map(children, function (c) {
            var _a;
            if (!React.isValidElement(c) || !c)
                return;
            var child = c;
            if (((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.shouldEjectOnMobile) !== false)
                return null;
            return React.cloneElement(child, {
                shouldEjectOnMobile: false,
            });
        });
    }, [children, isMobile]);
    // If children was not ejected on mobile, then we can't active the filter button when these children are actived;
    var notEjectedFields = useMemo(function () {
        var fields = [];
        if (!isMobile)
            return [];
        React.Children.forEach(children, function (c) {
            var _a;
            var child = c;
            if (!React.isValidElement(c) || !c)
                return;
            if (((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.shouldEjectOnMobile) !== false)
                return null;
            // If child is not ejected on mobile, then let's map each the childrens of this not ejected children to get the fields;
            React.Children.forEach(child.props.children, function (c) {
                var _a, _b;
                var isField = (_a = c === null || c === void 0 ? void 0 : c.props) === null || _a === void 0 ? void 0 : _a.field;
                if (isField)
                    fields.push((_b = c === null || c === void 0 ? void 0 : c.props) === null || _b === void 0 ? void 0 : _b.field);
            });
        });
        return fields;
    }, [isMobile, children]);
    return (_jsxs("div", { className: styles.wrapper, children: [isMobile && (_jsx("div", { children: _jsxs(Button, { variant: "tertiary", size: "medium", className: styles.button, onClick: function () { return setIsOpen(!isOpen); }, children: ["Filtros", _jsx(Icon, { name: "filter", size: 1 })] }) })), renderNotEjectedChildren, _jsxs("div", { className: concatStyles([
                    styles.wrapperFilters,
                    wrapperFiltersClassName,
                    isOpen ? styles.wrapperFiltersOpened : "",
                ]), children: [_jsxs("div", { className: styles.header, children: [_jsx("h3", { children: "Filtros" }), _jsx("button", { onClick: function () { return cleanAll(); }, className: styles.cleanButton, children: "Limpar filtros" })] }), _jsx("div", { className: concatStyles([
                            styles.wrapperFiltersContent,
                            wrapperFiltersContentClassName,
                            isOpen ? styles.wrapperFiltersContentOpened : "",
                        ]), children: renderChildren }), _jsx("div", { className: styles.actionsWrapper, onClick: function () { return setIsOpen(false); }, children: _jsx(Button, { children: "Voltar" }) })] })] }));
};
