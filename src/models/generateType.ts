const generateTypes = (
    type: StringConstructor | NumberConstructor,
    isUnique: boolean,
    setDefault: boolean,
    defaultValue: any,
    maxlength: number,
    minlength: number,
) => {
    if (setDefault) {
        return {
            type,
            maxlength,
            minlength,
            unique: isUnique,
            default: defaultValue,
        };
    }

    return {
        type,
        maxlength,
        unique: isUnique,
        minlength,
    };
};

export default generateTypes;
