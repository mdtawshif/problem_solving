function sumAfterMapping(array, mappingFunction) {
    const mappedArray = array.map(mappingFunction);
    const sum = mappedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }
  
 
