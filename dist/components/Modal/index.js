"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const Overlay_1 = __importDefault(require("./components/Overlay"));
const Footer_1 = __importDefault(require("./components/Footer"));
const Wrappper_1 = __importDefault(require("./components/Wrappper"));
const Body_1 = __importDefault(require("./components/Body"));
const Divider_1 = __importDefault(require("./components/Divider"));
exports.Modal = {
    Overlay: Overlay_1.default,
    Footer: Footer_1.default,
    Wrapper: Wrappper_1.default,
    Body: Body_1.default,
    Divider: Divider_1.default,
};
