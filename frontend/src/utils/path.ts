export const setParametersPath = (
    path = "",
    pathParams: { [key: string]: string },
    queryParams?: { [key: string]: string },
) => {
    if (!pathParams || !path) return path;
    if (queryParams)
        path = Object.entries(queryParams)?.reduce?.((prevPath, [key, value]) => {
            return prevPath.replace(`=[${key}]`, `=${value}`);
        }, path);
    return Object.entries(pathParams)?.reduce?.((prevPath, [key, value]) => {
        return prevPath.replace(`[${key}]`, value);
    }, path);
};
