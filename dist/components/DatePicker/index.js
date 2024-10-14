"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_day_picker_1 = require("react-day-picker");
const locale_1 = require("date-fns/locale");
const useWindowSize_1 = __importDefault(require("../../hooks/useWindowSize"));
const Button_1 = require("../../components/Button");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const date_fns_1 = require("date-fns");
require("react-day-picker/dist/style.css");
const adjustHorizontalPosition_1 = require("./utils/adjustHorizontalPosition");
const useClickOutside_1 = __importDefault(require("../../hooks/useClickOutside"));
const defaultClassNames = {
    root: styles_module_scss_1.default.rdpRoot,
    months: styles_module_scss_1.default.months,
    month: styles_module_scss_1.default.monthContainer,
    row: styles_module_scss_1.default.tableRow,
    tbody: styles_module_scss_1.default.tableBody,
    head_row: styles_module_scss_1.default.headRow,
    head_cell: styles_module_scss_1.default.weekDay,
    day: styles_module_scss_1.default.day,
    table: styles_module_scss_1.default.table,
    day_selected: styles_module_scss_1.default.selectedDay,
    caption: styles_module_scss_1.default.caption,
    caption_label: styles_module_scss_1.default.monthLabel,
    cell: styles_module_scss_1.default.cell,
    day_range_middle: styles_module_scss_1.default.range,
    day_range_end: styles_module_scss_1.default.rangeEnd,
    day_range_start: styles_module_scss_1.default.rangeStart,
    day_today: styles_module_scss_1.default.today,
    day_outside: styles_module_scss_1.default.dayOutside,
    day_hidden: styles_module_scss_1.default.dayOutside,
    button_reset: styles_module_scss_1.default.buttonReset,
};
const today = new Date();
const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1);
const DatePicker = ({ isOpen, mode, parentRef, formatter, handleToggle, handlePickDate, }) => {
    const [selectedDate, setSelectedDate] = (0, react_1.useState)();
    const datePickerRef = (0, react_1.useRef)(null);
    const { size } = (0, useWindowSize_1.default)();
    const isSmallScreen = (size?.width || 1366) < 768;
    const numberOfMonths = isSmallScreen ? 1 : 2;
    (0, useClickOutside_1.default)({
        callback: handleToggle,
        isActive: isOpen,
        ref: datePickerRef,
    });
    (0, react_1.useEffect)(() => {
        (0, adjustHorizontalPosition_1.adjustHorizontalPosition)(datePickerRef, parentRef);
    }, [isOpen]);
    const formatDate = (date) => {
        const formattedDate = formatter
            ? formatter?.(date)
            : (0, date_fns_1.format)(date, "yyyy-MM-dd");
        return formattedDate;
    };
    const handleApplyClick = () => {
        if (!selectedDate) {
            handlePickDate(undefined);
            handleToggle();
            return;
        }
        if (mode === "range") {
            const { from, to } = selectedDate;
            if (!from) {
                handlePickDate(undefined);
                handleToggle();
                return;
            }
            const startDate = formatDate(from);
            const endDate = formatDate(to || from);
            handlePickDate({ startDate, endDate });
            handleToggle();
            return;
        }
        const singleDate = selectedDate;
        handlePickDate(formatDate(singleDate));
        handleToggle();
    };
    const combinedClassNames = {
        ...defaultClassNames,
        ...(isSmallScreen
            ? { nav_button: styles_module_scss_1.default.navButton, nav: styles_module_scss_1.default.rdpNav }
            : {}),
    };
    const modeSpecificProps = mode === "range"
        ? {
            mode: "range",
            selected: selectedDate,
        }
        : {
            mode: "single",
            selected: selectedDate,
        };
    const commonProps = {
        locale: locale_1.ptBR,
        defaultMonth: oneMonthAgo,
        showOutsideDays: true,
        fixedWeeks: true,
        numberOfMonths,
        classNames: combinedClassNames,
        onSelect: setSelectedDate,
        ...modeSpecificProps,
    };
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.container, ref: datePickerRef, children: [(0, jsx_runtime_1.jsx)(react_day_picker_1.DayPicker, { ...commonProps }), (0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.footer, children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "outline", onClick: handleToggle, children: "Cancelar" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleApplyClick, children: "Aplicar" })] })] }));
};
exports.DatePicker = DatePicker;
