"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const Container_1 = __importDefault(require("./Container"));
const Divider_1 = __importDefault(require("./Divider"));
const Item_1 = __importDefault(require("./Item"));
const Menu_1 = __importDefault(require("./Menu"));
const Trigger_1 = __importDefault(require("./Trigger"));
exports.Dropdown = {
    Container: Container_1.default,
    Trigger: Trigger_1.default,
    Menu: Menu_1.default,
    Divider: Divider_1.default,
    Item: Item_1.default,
};
