import { useEffect } from "react";
export var useScrollOutside = function (_a) {
    var isActive = _a.isActive, containerRef = _a.containerRef, exceptionRef = _a.exceptionRef, onTrigger = _a.onTrigger;
    useEffect(function () {
        if (!isActive || !containerRef.current)
            return;
        var handleScroll = function (event) {
            var _a, _b;
            var target = event.target;
            if (((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(target)) ||
                ((_b = exceptionRef === null || exceptionRef === void 0 ? void 0 : exceptionRef.current) === null || _b === void 0 ? void 0 : _b.contains(target)))
                return;
            onTrigger();
        };
        window.addEventListener("scroll", handleScroll, true);
        return function () {
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, [isActive, containerRef, exceptionRef, onTrigger]);
};
