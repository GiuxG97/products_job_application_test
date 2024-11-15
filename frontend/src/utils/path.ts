/**
 * Set parameters in any path, where placeholders are defined with square brackets.
 * @param path
 * @param pathParams - Object containing the parameters to replace in the path.
 */
export const setParametersPath = (
    path = "",
    pathParams: { [key: string]: string },
) => {
    if (!pathParams || !path) return path;
    return Object.entries(pathParams)?.reduce?.((prevPath, [key, value]) => {
        return prevPath.replace(`[${key}]`, value);
    }, path);
};
