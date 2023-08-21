function numberInotDigitArray(number) {
    var newArray = [];
    const size = number.toString().length;
    var remainder = 1;

    while (number > 0) {
        remainder = number % 10;
        var number = parseInt(number / 10);
        newArray.unshift(remainder);
    }
    return newArray;
}