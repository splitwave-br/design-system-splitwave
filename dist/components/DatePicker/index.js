"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const concatStyles_1 = require("../../utils/concatStyles");
const react_day_picker_1 = require("react-day-picker");
const locale_1 = require("date-fns/locale");
const useWindowSize_1 = __importDefault(require("../../hooks/useWindowSize"));
const Button_1 = require("../../components/Button");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const date_fns_1 = require("date-fns");
const Dropdown_1 = require("../Dropdown");
require("react-day-picker/dist/style.css");
const defaultClassNames = {
    root: styles_module_scss_1.default.rdpRoot,
    month: styles_module_scss_1.default.monthContainer,
    months: styles_module_scss_1.default.months,
    table: styles_module_scss_1.default.rdpTable,
    day_today: styles_module_scss_1.default.actualDay,
    day: styles_module_scss_1.default.day,
    day_selected: styles_module_scss_1.default.selectedDay,
    day_range_start: styles_module_scss_1.default.selectedStart + " selectedEnd",
    day_range_middle: styles_module_scss_1.default.selectedRange + " selectedRange",
    day_range_end: styles_module_scss_1.default.selectedEnd + " selectedEnd",
    day_outside: styles_module_scss_1.default.dayHidden,
    caption_label: styles_module_scss_1.default.month,
    row: styles_module_scss_1.default.tableRow,
    tbody: styles_module_scss_1.default.tableBody,
    head_row: styles_module_scss_1.default.headRow,
    head_cell: styles_module_scss_1.default.weekDay,
    button: styles_module_scss_1.default.rdpButton,
    button_reset: styles_module_scss_1.default.rdpButton,
};
const today = new Date();
const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1);
const DatePicker = ({ isOpen, mode = "range", handleToggle, handleSetCustomDate, }) => {
    const [selectedDate, setSelectedDate] = (0, react_1.useState)();
    const datePickerRef = (0, react_1.useRef)(null);
    const { size } = (0, useWindowSize_1.default)();
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            const target = event.target;
            if (datePickerRef.current && !datePickerRef.current.contains(target)) {
                handleToggle();
            }
        };
        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, handleToggle]);
    const handleClick = () => {
        if (!selectedDate) {
            return handleSetCustomDate(undefined);
        }
        if (typeof selectedDate === "object") {
            const { from, to } = selectedDate;
            if (!from) {
                return handleSetCustomDate(undefined);
            }
            const formattedDateFrom = (0, date_fns_1.format)(from, "yyyy-MM-dd");
            const formattedDateTo = (0, date_fns_1.format)(to || from, "yyyy-MM-dd");
            const period = {
                startDate: formattedDateFrom,
                endDate: formattedDateTo,
            };
            handleSetCustomDate(period);
            return;
        }
        const formattedDate = (0, date_fns_1.format)(selectedDate, "yyyy-MM-dd");
        const period = {
            startDate: formattedDate,
            endDate: formattedDate,
        };
        handleSetCustomDate(period);
    };
    const numberOfMonths = (size?.width || 1366) <= 1025 ? 1 : 2;
    const isSmallScreen = (size?.width || 1366) < 1024;
    const mobileClassNames = isSmallScreen
        ? {
            caption: styles_module_scss_1.default.rdpCaption,
            nav_button: styles_module_scss_1.default.navButton,
            nav: styles_module_scss_1.default.rdpNav,
        }
        : {};
    const combinedClassNames = { ...defaultClassNames, ...mobileClassNames };
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
        disabled: { after: today },
        numberOfMonths,
        classNames: combinedClassNames,
        ...modeSpecificProps,
        onSelect: setSelectedDate,
    };
    if (!isOpen) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.monthsContainer, ref: datePickerRef, children: [(0, jsx_runtime_1.jsx)(react_day_picker_1.DayPicker, { ...commonProps, classNames: {
                    ...commonProps.classNames,
                    cell: (0, concatStyles_1.concatStyles)([styles_module_scss_1.default.cell, mode === "single" && styles_module_scss_1.default.single]),
                } }), (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Divider, {}), (0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.datePickerFooter, children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleToggle, variant: "outline", children: "Cancelar" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleClick, children: "Aplicar" })] })] }));
};
exports.DatePicker = DatePicker;
