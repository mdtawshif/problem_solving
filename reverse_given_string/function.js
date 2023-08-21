reverseStr = (str) => {
    const size = str.length;
    var newStr = [''];
    for (let i = size - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}

