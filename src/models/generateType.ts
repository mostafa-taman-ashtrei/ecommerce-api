const generateTypes = (
    type: StringConstructor | NumberConstructor,
    isUnique: boolean,
    isRequired: boolean,
    setDefault: boolean,
    defaultValue: any,
    maxlength: number,
    minlength: number,
) => {
    if (setDefault) {
        return {
            type,
            maxlength,
            required: isRequired,
            minlength,
            unique: isUnique,
            default: defaultValue,
        };
    }

    return {
        type,
        maxlength,
        required: isRequired,
        unique: isUnique,
        minlength,
    };
};

export default generateTypes;
