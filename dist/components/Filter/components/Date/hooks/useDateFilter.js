"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDateFilter = void 0;
const useFields_1 = require("../../../../../components/Filter/hooks/useFields");
const useFilter_1 = require("../../../../../components/Filter/hooks/useFilter");
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
const react_1 = require("react");
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const translateDate = (dateString) => {
    const date = (0, date_fns_1.parseISO)(dateString);
    const formatted = (0, date_fns_1.format)(date, "MMM d, yyyy", { locale: locale_1.ptBR });
    return capitalize(formatted);
};
const START_DATE_FIELD = "startDate";
const END_DATE_FIELD = "endDate";
const useDateFilter = (props, isPeriod) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { setFilter, getValue } = (0, useFilter_1.useFilterContext)();
    const { registerField } = (0, useFields_1.useFilterFields)();
    const hasField = !isPeriod && "field" in props;
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    const handleCleanPeriod = () => {
        setFilter(START_DATE_FIELD, "");
        setFilter(END_DATE_FIELD, "");
    };
    const handlePickDate = (date) => {
        if (!date) {
            if (hasField) {
                setFilter(props.field, "");
                return;
            }
            handleCleanPeriod();
            return;
        }
        if (isPeriod && typeof date === "object") {
            setFilter(START_DATE_FIELD, date.startDate);
            setFilter(END_DATE_FIELD, date.endDate);
            return;
        }
        if (hasField)
            setFilter(props.field, date);
    };
    (0, react_1.useEffect)(() => {
        if (hasField) {
            registerField(props.field);
        }
        else {
            registerField(START_DATE_FIELD);
            registerField(END_DATE_FIELD);
        }
    }, [isPeriod, props]);
    const getSelectedDate = () => {
        const fieldValue = hasField
            ? { startDate: getValue(props.field), endDate: getValue(props.field) }
            : {
                startDate: getValue(START_DATE_FIELD),
                endDate: getValue(END_DATE_FIELD),
            };
        if (!fieldValue.startDate && !fieldValue.endDate) {
            return null;
        }
        return {
            startDate: translateDate(fieldValue.startDate),
            endDate: translateDate(fieldValue.endDate),
        };
    };
    const selectedDate = getSelectedDate();
    const buttonLabel = !!selectedDate
        ? `${selectedDate.startDate} - ${selectedDate.endDate}`
        : "Selecione";
    return {
        isOpen,
        handleToggle,
        handlePickDate,
        buttonLabel,
    };
};
exports.useDateFilter = useDateFilter;
