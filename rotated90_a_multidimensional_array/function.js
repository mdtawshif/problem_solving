function rotatedArray(array) {
  const rotatedArray = [
    [],
    [],
    [],
    []
  ];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      rotatedArray[j][(array.length - 1) - i] = array[i][j];
    }
  }
  for (let i = 0; i < rotatedArray.length; i++) {
    console.log(rotatedArray[i].join(" "));
  }
}
