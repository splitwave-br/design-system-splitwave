"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
/**
 * Retrieves the value of a nested property from an object using dot notation.
 *
 * @param obj - The object to retrieve the value from.
 * @param key - The key representing the nested property using dot notation.
 * @returns The value of the nested property, or undefined if the property does not exist.
 */
function get(obj, key) {
    return key.split(".").reduce((acc, part) => acc && acc[part], obj);
}
