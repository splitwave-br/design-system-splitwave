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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQWRqdXN0U2Nyb2xsYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZUFkanVzdFNjcm9sbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxDQUFDOzs7OztBQUViLGlDQUFvQztBQUNwQyxvRUFBNEM7QUFFNUMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUUsQ0FDN0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztBQUUzRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtJQUM5QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUM7SUFDckMsTUFBTSxxQkFBcUIsR0FBRyxJQUFBLG1CQUFXLEVBQ3ZDLENBQUMsTUFBZSxFQUFFLEVBQUU7UUFDbEIsTUFBTSxZQUFZLEdBQ2hCLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWTtZQUNyQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUV4QyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsSUFBSSxZQUFZLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVE7b0JBQ3pDLENBQUMsQ0FBQyxHQUFHO29CQUNMLENBQUMsQ0FBQyxHQUFHLGNBQWMsSUFBSSxDQUFDO1lBQzVCLENBQUM7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFDLENBQUM7YUFBTSxDQUFDO1lBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDLEVBQ0QsQ0FBQyxRQUFRLENBQUMsQ0FDWCxDQUFDO0lBRUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsa0JBQWtCLENBQUMifQ==