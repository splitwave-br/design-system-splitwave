"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = require("@/components/Icon");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const useModal_1 = require("../../hooks/useModal");
const Wrapper = ({ children, title, onClose }) => {
    const { closeModal } = (0, useModal_1.useModal)();
    const handleClose = () => {
        closeModal();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.wrapper, onClick: (e) => e.stopPropagation(), children: [title && ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.header, children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleClose, className: styles_module_scss_1.default.backBtn, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: 'back' }) }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.title, children: title }), (0, jsx_runtime_1.jsx)("button", { onClick: handleClose, className: styles_module_scss_1.default.closeBtn, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { size: 'micro', name: 'cancel' }) })] })), children] }));
};
exports.default = Wrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9jb21wb25lbnRzL1dyYXBwZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUF5QztBQUN6Qyw4RUFBMEM7QUFDMUMsbURBQTZEO0FBUTdELE1BQU0sT0FBTyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsRUFBRSxFQUFFO0lBQzdELE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFBLG1CQUFRLEdBQUUsQ0FBQztJQUVsQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7UUFDdkIsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLEVBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FDTCxpQ0FBSyxTQUFTLEVBQUUsNEJBQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGFBQ2hFLEtBQUssSUFBSSxDQUNSLGlDQUFLLFNBQVMsRUFBRSw0QkFBTSxDQUFDLE1BQU0sYUFDM0IsbUNBQVEsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsNEJBQU0sQ0FBQyxPQUFPLFlBQ3JELHVCQUFDLFdBQUksSUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHLEdBQ2IsRUFDVCxpQ0FBTSxTQUFTLEVBQUUsNEJBQU0sQ0FBQyxLQUFLLFlBQUcsS0FBSyxHQUFRLEVBQzdDLG1DQUFRLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDRCQUFNLENBQUMsUUFBUSxZQUN0RCx1QkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsUUFBUSxHQUFHLEdBQzlCLElBQ0wsQ0FDUCxFQUNBLFFBQVEsSUFDTCxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==