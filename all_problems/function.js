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


reverseStr = (str) => {
    const size = str.length;
    var newStr = [''];
    for (let i = size - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}

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

halfString = (str) => {
    let x;
    var newStr = [''];
    const size = str.length;

    if (size % 2 === 0) {
        x = size / 2;
    } else {
        x = size / 2 - 1;
    }
    for (let i = 0; i < x; i++) {
        newStr = newStr + str[i];
    }
    return newStr;

}

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