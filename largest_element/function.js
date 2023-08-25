// maxNum = (arr) => {
//     var max = arr[0];
//     const size = arr.length;
//     for (let i = 0; i < size; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


function findLargestRecursive(array, currentIndex = 0, largest = array[0]) {
    if (currentIndex >= array.length) {
        return largest;
    }
    
    if (array[currentIndex] > largest) {
        largest = array[currentIndex];
    }
    
    return findLargestRecursive(array, currentIndex + 1, largest);
}

