interface FilterObject {
    [key: string]: string | number | boolean | undefined | null | object;
}

interface PathVariables {
    [key: string]: string | number | boolean | undefined | null;
}

const filterEmptyStrings = (
    filterObject: FilterObject | undefined
): FilterObject | undefined => {
    if (!filterObject) return undefined;
    const checkedObj = copyObjectWithoutRef(filterObject);

    Object.keys(checkedObj).map((column) => {
        if (
            checkedObj[column] === undefined ||
            checkedObj[column] === null ||
            checkedObj[column] === ''
        )
            delete checkedObj[column];
    });

    return checkedObj;
};

const copyObjectWithoutRef = (
    providedObj: FilterObject | undefined
): FilterObject => JSON.parse(JSON.stringify(providedObj)) as FilterObject;

const insertPathVariables = (
    path: string,
    pathVariables: PathVariables | undefined
): string => {
    if (!pathVariables) {
        return path;
    }
    const placeholderRegex = /:([A-z]*)/g;

    return path.replace(placeholderRegex, (_, placeholder: string) => {
        const value = pathVariables[placeholder];
        return value !== undefined ? String(value) : `:${placeholder}`;
    });
};

export { filterEmptyStrings, insertPathVariables, copyObjectWithoutRef };
