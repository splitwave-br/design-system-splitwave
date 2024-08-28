"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Overlay = ({ children, onClose }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        if (event.target instanceof HTMLDivElement &&
            event.target.classList.contains('overlay')) {
            onClose();
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `${styles_module_scss_1.default.overlay} overlay`, onMouseDown: handleClick, children: children }));
};
exports.default = Overlay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9jb21wb25lbnRzL092ZXJsYXkvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDhFQUEwQztBQU8xQyxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBZ0IsRUFBRSxFQUFFO0lBQ3RELE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBaUMsRUFBRSxFQUFFO1FBQ3hELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUNFLEtBQUssQ0FBQyxNQUFNLFlBQVksY0FBYztZQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQzFDLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRixPQUFPLENBQ0wsZ0NBQUssU0FBUyxFQUFFLEdBQUcsNEJBQU0sQ0FBQyxPQUFPLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxZQUNsRSxRQUFRLEdBQ0wsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIn0=