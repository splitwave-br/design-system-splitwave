import { useEffect } from "react";
export var useClickOutside = function (_a) {
    var ref = _a.ref, callback = _a.callback, isActive = _a.isActive, exceptionRef = _a.exceptionRef;
    useEffect(function () {
        var handleClickOutside = function (event) {
            var _a;
            var target = event.target;
            var exceptionHasTarget = (exceptionRef === null || exceptionRef === void 0 ? void 0 : exceptionRef.current) && ((_a = exceptionRef === null || exceptionRef === void 0 ? void 0 : exceptionRef.current) === null || _a === void 0 ? void 0 : _a.contains(target));
            var refHasTarget = ref.current && ref.current.contains(target);
            if (!exceptionHasTarget && !refHasTarget) {
                callback();
            }
        };
        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, ref, callback]);
};
