export const getAssociationList = (source, keys = []) => {
    if (!source) {
        return [];
    }

    for (const key of keys) {
        const value = source[key];

        if (Array.isArray(value)) {
            return value.filter(Boolean);
        }
    }

    return [];
};

export const asBulletList = (value) => {
    if (Array.isArray(value)) {
        return value.filter(Boolean);
    }

    if (typeof value === 'string' && value.trim()) {
        try {
            const parsedValue = JSON.parse(value);

            if (Array.isArray(parsedValue)) {
                return parsedValue.filter(Boolean);
            }
        } catch {
            // Fall through and render the raw string.
        }

        return [value];
    }

    return [];
};