differenceBetweenPair = (arr) => {
    const size = arr.length;
    var smallestNum = arr[0];
    var largestNum = arr[0];
    for (let i = 0; i < size; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }

    }
    const maxDiff = largestNum - smallestNum;
    return maxDiff;
}