"use client";
import { useEffect, useMemo, useState } from "react";
var useWindowSize = function () {
    var _a = useState({
        width: undefined,
        height: undefined,
    }), size = _a[0], setSize = _a[1];
    useEffect(function () {
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    var isMobile = useMemo(function () { return size.width <= 768; }, [size.width]);
    return { size: size, isMobile: isMobile };
};
export default useWindowSize;
