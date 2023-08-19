removeDuplicate = (arr) => {
    var newArr = [];
    const size = arr.length;

    for (let i = 0; i < size; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
