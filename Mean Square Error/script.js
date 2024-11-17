// Mean Square error

var solution = function(firstArray, secondArray) {
    let totalDifference = 0;
    
    for (let i = 0; i < firstArray.length; i++) {
      let diff = firstArray[i] - secondArray[i];
      totalDifference += diff * diff;
    }
    
    return totalDifference / firstArray.length;
  };