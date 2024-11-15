/**
 * It takes an object and clean all the fields starting with the given string argument
 * @param obj - Object to clean, it could be an array or an object (also with nested objects inside)
 * @param fieldStartsWith
 */
export const cleanInternalFields = <T>(obj: T, fieldStartsWith: string = "__"): T => {
    if (Array.isArray(obj))
        // If the argument is an array, recursively apply the function to each element
        return obj.map(item => cleanInternalFields(item)) as T;

    if (typeof obj === 'object' && obj !== null)
        // If it is an object, filter out fields starting with "__"
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([key]) => !key.startsWith(fieldStartsWith)) // Remove the entries with key starting with "fieldStartsWith"
                .map(([key, value]) => [key, cleanInternalFields(value)]) // Apply this filtering process to each fields of the object
        ) as T;

    // Directly return the value without striping modification if it's not an object or array
    return obj;
}
