"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const variants_module_scss_1 = __importDefault(require("./variants.module.scss"));
const Button = (_a) => {
    var { children, variant = 'primary', size = 'large', type = 'button', disabled, loading, className } = _a, props = __rest(_a, ["children", "variant", "size", "type", "disabled", "loading", "className"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.loading_overlay, children: " " }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: type, disabled: loading || disabled, className: [
                    styles_module_scss_1.default.button,
                    styles_module_scss_1.default[`size__${size}`],
                    variants_module_scss_1.default[`variant__${variant}`],
                    className ? className : '',
                    loading ? variants_module_scss_1.default.loading : '',
                ].join(' ') }, props, { children: children }))] }));
};
exports.Button = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDhFQUF5QztBQUN6QyxrRkFBNkM7QUFXdEMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxFQVNULEVBQUUsRUFBRTtRQVRLLEVBQ3JCLFFBQVEsRUFDUixPQUFPLEdBQUcsU0FBUyxFQUNuQixJQUFJLEdBQUcsT0FBTyxFQUNkLElBQUksR0FBRyxRQUFRLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxTQUFTLE9BRUcsRUFEVCxLQUFLLGNBUmEsMkVBU3RCLENBRFM7SUFFUixPQUFPLENBQ0wsNkRBQ0csT0FBTyxJQUFJLGdDQUFLLFNBQVMsRUFBRSw0QkFBTSxDQUFDLGVBQWUsa0JBQVMsRUFDM0QsaURBQ0UsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFDN0IsU0FBUyxFQUFFO29CQUNULDRCQUFNLENBQUMsTUFBTTtvQkFDYiw0QkFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLDhCQUFRLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBQztvQkFDL0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUMsOEJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ2hDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUNQLEtBQUssY0FFUixRQUFRLElBQ0YsSUFDUixDQUNKLENBQUE7QUFDSCxDQUFDLENBQUE7QUE3QlksUUFBQSxNQUFNLFVBNkJsQiJ9