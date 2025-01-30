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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import useWindowSize from "../../hooks/useWindowSize";
import { Button } from "../../components/Button";
import styles from "./styles.module.scss";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { adjustHorizontalPosition } from "./utils/adjustHorizontalPosition";
import useClickOutside from "../../hooks/useClickOutside";
var defaultClassNames = {
    root: styles.rdpRoot,
    months: styles.months,
    month: styles.monthContainer,
    row: styles.tableRow,
    tbody: styles.tableBody,
    head_row: styles.headRow,
    head_cell: styles.weekDay,
    day: styles.day,
    table: styles.table,
    day_selected: styles.selectedDay,
    caption: styles.caption,
    caption_label: styles.monthLabel,
    cell: styles.cell,
    day_range_middle: styles.range,
    day_range_end: styles.rangeEnd,
    day_range_start: styles.rangeStart,
    day_today: styles.today,
    day_outside: styles.dayOutside,
    day_hidden: styles.dayOutside,
    button_reset: styles.buttonReset,
};
var today = new Date();
var oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1);
export var DatePicker = function (_a) {
    var isOpen = _a.isOpen, mode = _a.mode, parentRef = _a.parentRef, formatter = _a.formatter, handleToggle = _a.handleToggle, handlePickDate = _a.handlePickDate;
    var _b = useState(), selectedDate = _b[0], setSelectedDate = _b[1];
    var datePickerRef = useRef(null);
    var size = useWindowSize().size;
    var isSmallScreen = ((size === null || size === void 0 ? void 0 : size.width) || 1366) < 768;
    var numberOfMonths = isSmallScreen ? 1 : 2;
    useClickOutside({
        callback: handleToggle,
        isActive: isOpen,
        ref: datePickerRef,
    });
    useEffect(function () {
        adjustHorizontalPosition(datePickerRef, parentRef);
    }, [isOpen]);
    var formatDate = function (date) {
        var formattedDate = formatter
            ? formatter === null || formatter === void 0 ? void 0 : formatter(date)
            : format(date, "yyyy-MM-dd");
        return formattedDate;
    };
    var handleApplyClick = function () {
        if (!selectedDate) {
            handlePickDate(undefined);
            handleToggle();
            return;
        }
        if (mode === "range") {
            var _a = selectedDate, from = _a.from, to = _a.to;
            if (!from) {
                handlePickDate(undefined);
                handleToggle();
                return;
            }
            var startDate = formatDate(from);
            var endDate = formatDate(to || from);
            handlePickDate({ startDate: startDate, endDate: endDate });
            handleToggle();
            return;
        }
        var singleDate = selectedDate;
        handlePickDate(formatDate(singleDate));
        handleToggle();
    };
    var combinedClassNames = __assign(__assign({}, defaultClassNames), (isSmallScreen
        ? { nav_button: styles.navButton, nav: styles.rdpNav }
        : {}));
    var modeSpecificProps = mode === "range"
        ? {
            mode: "range",
            selected: selectedDate,
        }
        : {
            mode: "single",
            selected: selectedDate,
        };
    var commonProps = __assign({ locale: ptBR, defaultMonth: oneMonthAgo, showOutsideDays: true, fixedWeeks: true, numberOfMonths: numberOfMonths, classNames: combinedClassNames, onSelect: setSelectedDate }, modeSpecificProps);
    if (!isOpen)
        return null;
    return (_jsxs("div", { className: styles.container, ref: datePickerRef, children: [_jsx(DayPicker, __assign({}, commonProps)), _jsxs("div", { className: styles.footer, children: [_jsx(Button, { variant: "secondary", onClick: handleToggle, children: "Cancelar" }), _jsx(Button, { onClick: handleApplyClick, children: "Aplicar" })] })] }));
};
