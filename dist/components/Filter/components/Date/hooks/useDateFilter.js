import { useFilterFields } from "../../../../../components/Filter/hooks/useFields";
import { useFilterContext } from "../../../../../components/Filter/hooks/useFilter";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
var capitalize = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
var translateDate = function (dateString) {
    var date = parseISO(dateString);
    var formatted = format(date, "MMM d, yyyy", { locale: ptBR });
    return capitalize(formatted);
};
var START_DATE_FIELD = "startDate";
var END_DATE_FIELD = "endDate";
export var useDateFilter = function (props, isPeriod) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useFilterContext(), setFilter = _b.setFilter, getValue = _b.getValue;
    var registerField = useFilterFields().registerField;
    var hasField = !isPeriod && "field" in props;
    var handleToggle = function () {
        setIsOpen(function (prev) { return !prev; });
    };
    var handleCleanPeriod = function () {
        setFilter(START_DATE_FIELD, "");
        setFilter(END_DATE_FIELD, "");
    };
    var handlePickDate = function (date) {
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
    useEffect(function () {
        if (hasField) {
            registerField(props.field);
        }
        else {
            registerField(START_DATE_FIELD);
            registerField(END_DATE_FIELD);
        }
    }, [isPeriod, props]);
    var getSelectedDate = function () {
        var fieldValue = hasField
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
    var selectedDate = getSelectedDate();
    var buttonLabel = !!selectedDate
        ? "".concat(selectedDate.startDate, " - ").concat(selectedDate.endDate)
        : "Selecione";
    return {
        isOpen: isOpen,
        handleToggle: handleToggle,
        handlePickDate: handlePickDate,
        buttonLabel: buttonLabel,
    };
};
