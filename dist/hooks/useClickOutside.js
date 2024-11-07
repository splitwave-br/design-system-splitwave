import { useEffect } from "react";
var useClickOutside = function (_a) {
    var ref = _a.ref, callback = _a.callback, isActive = _a.isActive;
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
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
export default useClickOutside;
