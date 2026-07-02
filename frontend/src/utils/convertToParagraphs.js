const asParagraphs = (value) => {
    if (Array.isArray(value)) {
        return value.filter(Boolean); // Clean out empty items from array
    }

    if (typeof value === 'string' && value.trim()) {
        try {
            // Attempt parse JSON string into array with plain text
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

export default asParagraphs;