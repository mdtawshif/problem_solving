function getEveryNthElement(array, n) {
    if (n <= 0) {
      console.log("Invalid value of n. Please provide a positive integer.");
      return [];
    }
  
    const result = [];
    for (let i = n - 1; i < array.length; i += n) {
      result.push(array[i]);
    }
    return result;
  }