function sameNumber(arr1, arr2) {
    const size = arr1.length;
    var newArray = [];
    for(  let i=0; i<size; i++){
        if(arr2.indexOf(arr1[i]) != -1){
            newArray.push(arr1[i]);
        }
    }
    return newArray
}