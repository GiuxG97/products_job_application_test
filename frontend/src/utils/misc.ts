export const stripInternalFields = <T>(obj: T, fieldStartsWith: string = "__"): T => {
    if (Array.isArray(obj))
        // If the argument is an array, recursively apply the function to each element
        return obj.map(item => stripInternalFields(item)) as T;

    if (typeof obj === 'object' && obj !== null)
        // If it is an object, filter out fields starting with "__"
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([key]) => !key.startsWith(fieldStartsWith)) // Remove the entries with key starting with "__"
                .map(([key, value]) => [key, stripInternalFields(value)]) // Apply this filtering process to each fields of the object
        ) as T;

    // Directly return the value without striping modification if it's not an object or array
    return obj;
}
