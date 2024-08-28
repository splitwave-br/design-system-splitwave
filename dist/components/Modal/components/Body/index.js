"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const ModalBody = ({ children, className }) => {
    const modalBodyStyles = [styles_module_scss_1.default.body, className].join(' ');
    return (0, jsx_runtime_1.jsx)("div", { className: modalBodyStyles, children: children });
};
exports.default = ModalBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9jb21wb25lbnRzL0JvZHkvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhFQUEwQztBQU0xQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBa0IsRUFBRSxFQUFFO0lBQzVELE1BQU0sZUFBZSxHQUFHLENBQUMsNEJBQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELE9BQU8sZ0NBQUssU0FBUyxFQUFFLGVBQWUsWUFBRyxRQUFRLEdBQU8sQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==