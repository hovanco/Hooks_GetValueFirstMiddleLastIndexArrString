// get value of index arrMiddleIndex.push(stringInput[j]); vd: [hello] => [hlo]
const getFirstMiddleLastValue = (stringInput) => {
  var arrFirstIndex = [];
  var arrLastIndex = [];
  var arrMiddleIndex = [];

  for (var j = 0; j <= stringInput.length - 1; j++) {
    if (stringInput.length < 4) return stringInput;
    if (j == 0) {
      arrFirstIndex.push(stringInput[j]);
    }
    // length / 2 - 1: get the left element of result length / 2; length / 2 + 1 get the right element of result length / 2
    if (j == stringInput.length / 2 - 1) {
      arrMiddleIndex.push(stringInput[j]);
      arrFirstIndex.push(arrMiddleIndex);
    }
    if (j == stringInput.length - 1) {
      arrLastIndex.push(stringInput[j]);
    }
  }
  arrFirstIndex.push(arrLastIndex);
  return arrFirstIndex.join();
};

// get index arrMiddleIndex.push(j); vd: [hello] => [024]
const getFirstMiddleLastIndex = (stringInput) => {
  var arrFirstIndex = [];
  var arrLastIndex = [];
  var arrMiddleIndex = [];

  for (var j = 0; j <= stringInput.length - 1; j++) {
    if (j == 0) {
      arrFirstIndex.push(j);
    }
    if (j == stringInput.length / 2 - 1) {
      arrMiddleIndex.push(j);
      arrFirstIndex.push(arrMiddleIndex);
    }
    if (j == stringInput.length - 1) {
      arrLastIndex.push(j);
    }
  }
  arrFirstIndex.push(arrLastIndex);
  return arrFirstIndex.join();
};

export { getFirstMiddleLastIndex, getFirstMiddleLastValue };
