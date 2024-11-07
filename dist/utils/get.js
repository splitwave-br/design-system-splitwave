/**
 * Retrieves the value of a nested property from an object using dot notation.
 *
 * @param obj - The object to retrieve the value from.
 * @param key - The key representing the nested property using dot notation.
 * @returns The value of the nested property, or undefined if the property does not exist.
 */
export function get(obj, key) {
    return key.split(".").reduce(function (acc, part) { return acc && acc[part]; }, obj);
}
