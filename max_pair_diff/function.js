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



// function differenceBetweenPair(list){
//   const length = list.length;
//   if(length < 3){
//     return "Differenct is: " + (list[0] > list[1] ? list[0] - list[1] : list[1]- list[0])
//   }
//   let largest = list[0], smallest = list[1];
//   if(largest < smallest){
//     let swap = largest;
//     largest = smallest;
//     smallest = swap;
//   }

//   for(let i=2; i<length; i++){
//     if(list[i] > largest){
//         largest = list[i];
//     }
//     else if(list[i] < smallest){
//         smallest = list[i];
//     }
//   }

//   return  (largest - smallest);
// }