"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useWindowSize_1 = __importDefault(require("./useWindowSize"));
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
const useAdjustScrollbar = () => {
    const { isMobile } = (0, useWindowSize_1.default)();
    const handleRemoveScrollbar = (0, react_1.useCallback)((remove) => {
        const hasScrollbar = document.documentElement.scrollHeight >
            document.documentElement.clientHeight;
        if (remove) {
            if (hasScrollbar) {
                const scrollbarWidth = getScrollbarWidth();
                document.body.style.paddingRight = isMobile
                    ? '0'
                    : `${scrollbarWidth}px`;
            }
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'inherit';
            document.body.style.paddingRight = '0';
        }
    }, [isMobile]);
    return { handleRemoveScrollbar };
};
exports.default = useAdjustScrollbar;
