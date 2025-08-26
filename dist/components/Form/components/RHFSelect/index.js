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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import "../../controls/Input/variables.scss";
import { Select } from "../../controls/Select";
export var RHFSelect = function (_a) {
    var getLabel = _a.getLabel, getValue = _a.getValue, options = _a.options, name = _a.name, props = __rest(_a, ["getLabel", "getValue", "options", "name"]);
    var _b = useFormContext(), setValue = _b.setValue, watch = _b.watch;
    var value = watch(name);
    var handleSelect = function (option) {
        console.log("chamou a handle select no rhf");
        if (option) {
            return setValue(name, getValue(option), {
                shouldValidate: true,
            });
        }
        setValue(name, "", {
            shouldValidate: true,
        });
    };
    return (_jsx(Select, __assign({ onChange: handleSelect, getLabel: getLabel, getValue: getValue, options: options, value: value }, props)));
};
