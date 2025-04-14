import { useEffect, useRef, useState } from "react";
export function useDebounceValue(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 300 : _c, equalityFn = _b.equalityFn;
    var _d = useState(value), debouncedValue = _d[0], setDebouncedValue = _d[1];
    var previousValueRef = useRef(value);
    var timeoutRef = useRef();
    var areEqual = equalityFn !== null && equalityFn !== void 0 ? equalityFn : (function (a, b) { return a === b; });
    useEffect(function () {
        if (areEqual(previousValueRef.current, value))
            return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(function () {
            setDebouncedValue(value);
            previousValueRef.current = value;
        }, delay);
        return function () { return clearTimeout(timeoutRef.current); };
    }, [value, delay, areEqual]);
    return debouncedValue;
}
