"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const Date_1 = require("./Date");
const Price_1 = require("./Price");
const Badge_1 = require("./Badge");
const Text_1 = require("./Text");
const Placeholder_1 = require("./Placeholder");
const Actions_1 = require("./Actions");
const Dropdown_1 = require("../../../../components/Dropdown");
const Skeleton_1 = require("./Skeleton");
exports.Cell = {
    Date: Date_1.Date,
    Price: Price_1.Price,
    Badge: Badge_1.Badge,
    Text: Text_1.Text,
    Placeholder: Placeholder_1.Placeholder,
    Actions: Actions_1.Actions,
    ActionItem: Dropdown_1.Dropdown.Item,
    Skeleton: Skeleton_1.Skeleton,
};
