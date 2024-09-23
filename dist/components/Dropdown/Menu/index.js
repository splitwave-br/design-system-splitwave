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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const concatStyles_1 = require("../../../utils/concatStyles");
const Menu = (0, react_1.forwardRef)((_a, ref) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref, className: (0, concatStyles_1.concatStyles)([styles_module_scss_1.default.menu, className]) }, props, { children: children })));
});
Menu.displayName = "Menu";
exports.default = Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9NZW51L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUEwQztBQUMxQyw4RUFBMEM7QUFDMUMsOERBQTJEO0FBTTNELE1BQU0sSUFBSSxHQUFHLElBQUEsa0JBQVUsRUFDckIsQ0FBQyxFQUFpQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQTFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsT0FBWSxFQUFQLEtBQUssY0FBL0IseUJBQWlDLENBQUY7SUFDOUIsT0FBTyxDQUNMLDhDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsMkJBQVksRUFBQyxDQUFDLDRCQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQzdDLEtBQUssY0FFUixRQUFRLElBQ0wsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztBQUUxQixrQkFBZSxJQUFJLENBQUMifQ==