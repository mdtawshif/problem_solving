function extractValuesAtIndexes(array, indexes) {
    const result = [];
    
    for (const index of indexes) {
        if (index >= 0 && index < array.length) {
            result.push(array[index]);
        } else {
            result.push(null); 
        }
    }
    
    return result;
}

