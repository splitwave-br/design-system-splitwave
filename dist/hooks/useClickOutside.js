"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useClickOutside = ({ ref, callback, isActive }) => {
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, ref, callback]);
};
exports.default = useClickOutside;
