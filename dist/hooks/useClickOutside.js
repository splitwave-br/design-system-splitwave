import { useEffect } from "react";
export var useClickOutside = function (_a) {
    var ref = _a.ref, callback = _a.callback, isActive = _a.isActive, exceptionRef = _a.exceptionRef;
    useEffect(function () {
        if (!isActive)
            return;
        var handleClickOutside = function (event) {
            var _a, _b;
            var target = event.target;
            var clickedInsideRef = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(target);
            var clickedInsideException = (_b = exceptionRef === null || exceptionRef === void 0 ? void 0 : exceptionRef.current) === null || _b === void 0 ? void 0 : _b.contains(target);
            if (!clickedInsideRef && !clickedInsideException) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, ref, callback]);
};
