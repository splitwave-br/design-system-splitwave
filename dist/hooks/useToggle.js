import { useCallback, useState } from "react";
export function useToggle(defaultValue) {
    var _a = useState(!!defaultValue), value = _a[0], setValue = _a[1];
    var handleToggle = useCallback(function () {
        setValue(function (prev) { return !prev; });
    }, []);
    return [value, handleToggle, setValue];
}
