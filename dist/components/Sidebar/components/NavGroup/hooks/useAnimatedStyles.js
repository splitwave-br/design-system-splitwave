import { useMemo } from "react";
export var useAnimatedStyles = function (_a) {
    var routes = _a.routes, isOpened = _a.isOpened;
    var calculatedHeight = useMemo(function () {
        var rows = routes.length * 32;
        var gaps = (routes.length - 1) * 8;
        var paddings = 8;
        return rows + gaps + paddings;
    }, [routes.children]);
    var animatedStyles = useMemo(function () {
        if (isOpened) {
            return {
                maxHeight: calculatedHeight,
            };
        }
        return {
            maxHeight: 0,
        };
    }, [isOpened, calculatedHeight]);
    return {
        animatedStyles: animatedStyles,
    };
};
