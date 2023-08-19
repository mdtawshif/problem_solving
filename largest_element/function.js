maxNum = (arr) => {
    var max = arr[0];
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


