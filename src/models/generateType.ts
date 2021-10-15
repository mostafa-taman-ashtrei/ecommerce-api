const generateTypes = (
    type: StringConstructor | NumberConstructor | BooleanConstructor | ArrayConstructor | DateConstructor | null,
    isUnique: boolean,
    isRequired: boolean,
    setMinMax: boolean,
    setDefault: boolean,
    defaultValue: any,
    maxlength: number,
    minlength: number,
) => {
    if (setDefault) {
        if (!setMinMax) {
            return {
                type,
                required: isRequired,
                unique: isUnique,
                default: defaultValue,
            };
        }

        return {
            type,
            maxlength,
            required: isRequired,
            minlength,
            unique: isUnique,
            default: defaultValue,
        };
    }

    if (!setMinMax) {
        return {
            type,
            required: isRequired,
            unique: isUnique,
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
