"use strict";
"use client";
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
require("./variables.scss");
const concatStyles_1 = require("../../../utils/concatStyles");
const Trigger = (0, react_1.forwardRef)((_a, ref) => {
    var { children, isOpen } = _a, props = __rest(_a, ["children", "isOpen"]);
    if (typeof children === "function") {
        return children(props, ref);
    }
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ ref: ref, className: (0, concatStyles_1.concatStyles)([styles_module_scss_1.default.wrapper, isOpen ? styles_module_scss_1.default.isOpen : ""]) }, props, { children: children })));
});
Trigger.displayName = "Trigger";
exports.default = Trigger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi9UcmlnZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUViLGlDQUFtQztBQUNuQyw4RUFBMEM7QUFDMUMsNEJBQTBCO0FBQzFCLDhEQUEyRDtBQU8zRCxNQUFNLE9BQU8sR0FBRyxJQUFBLGtCQUFVLEVBQ3hCLENBQUMsRUFBOEIsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUF2QyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQVksRUFBUCxLQUFLLGNBQTVCLHNCQUE4QixDQUFGO0lBQzNCLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFLENBQUM7UUFDbkMsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxPQUFPLENBQ0wsaURBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSwyQkFBWSxFQUFDLENBQUMsNEJBQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyw0QkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFDbEUsS0FBSyxjQUVSLFFBQVEsSUFDRixDQUNWLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLE9BQU8sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0FBRWhDLGtCQUFlLE9BQU8sQ0FBQyJ9