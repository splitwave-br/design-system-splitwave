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
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const variants_module_scss_1 = __importDefault(require("./variants.module.scss"));
const sizes_module_scss_1 = __importDefault(require("./sizes.module.scss"));
require("../styles/global.scss");
function Badge(_a) {
    var { children, variant = "gray", size = "sm", disabled, className } = _a, props = __rest(_a, ["children", "variant", "size", "disabled", "className"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ disabled: disabled, className: [
            styles_module_scss_1.default.button,
            size ? sizes_module_scss_1.default[size] : "",
            variant ? variants_module_scss_1.default[variant] : "",
            className ? className : "",
        ].join(" ") }, props, { children: children })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CYWRnZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxzQkFzQkM7O0FBaERELDhFQUEwQztBQUMxQyxrRkFBOEM7QUFDOUMsNEVBQXdDO0FBQ3hDLGlDQUErQjtBQXVCL0IsU0FBZ0IsS0FBSyxDQUFDLEVBT2I7UUFQYSxFQUNwQixRQUFRLEVBQ1IsT0FBTyxHQUFHLE1BQU0sRUFDaEIsSUFBSSxHQUFHLElBQUksRUFDWCxRQUFRLEVBQ1IsU0FBUyxPQUVGLEVBREosS0FBSyxjQU5ZLHdEQU9yQixDQURTO0lBRVIsT0FBTyxDQUNMLGlEQUNFLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFNBQVMsRUFBRTtZQUNULDRCQUFNLENBQUMsTUFBTTtZQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsMkJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFDLDhCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDM0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQ1AsS0FBSyxjQUVSLFFBQVEsSUFDRixDQUNWLENBQUM7QUFDSixDQUFDIn0=