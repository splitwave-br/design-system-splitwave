"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWindowSize = () => {
    const [size, setSize] = (0, react_1.useState)({
        width: undefined,
        height: undefined,
    });
    (0, react_1.useEffect)(() => {
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isMobile = size.width < 768;
    return { size, isMobile };
};
exports.default = useWindowSize;
