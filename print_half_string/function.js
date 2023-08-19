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

