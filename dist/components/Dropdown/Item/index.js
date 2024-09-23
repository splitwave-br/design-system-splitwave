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
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
require("./variables.scss");
const Item = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const itemStyles = [styles_module_scss_1.default.item, className].join(" ");
    return (0, jsx_runtime_1.jsx)("button", Object.assign({ className: itemStyles }, props));
};
exports.default = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9JdGVtL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUEwQztBQUMxQyw0QkFBMEI7QUFJMUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUE2QixFQUFFLEVBQUU7UUFBakMsRUFBRSxTQUFTLE9BQWtCLEVBQWIsS0FBSyxjQUFyQixhQUF1QixDQUFGO0lBQ2pDLE1BQU0sVUFBVSxHQUFHLENBQUMsNEJBQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELE9BQU8saURBQVEsU0FBUyxFQUFFLFVBQVUsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUN0RCxDQUFDLENBQUM7QUFFRixrQkFBZSxJQUFJLENBQUMifQ==