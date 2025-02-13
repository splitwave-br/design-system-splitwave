import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import dayjs from "dayjs";
import styles from "./styles.module.scss";
var convertDateToObject = function (date) {
    if (!date)
        return null;
    var formattedDate = dayjs(date).format("DD/MM/YY");
    var formattedTime = dayjs(date).format("HH:mm");
    return {
        date: formattedDate,
        time: formattedTime,
    };
};
export var Date = function (_a) {
    var children = _a.children, _b = _a.showTime, showTime = _b === void 0 ? true : _b;
    var date = useMemo(function () {
        return convertDateToObject(children);
    }, [children]);
    if (!date)
        return (_jsx("div", { children: _jsx("p", { children: "-" }) }));
    return (_jsxs("div", { className: styles.cell, children: [_jsx("p", { children: date.date }), showTime && _jsx("time", { children: date.time })] }));
};
