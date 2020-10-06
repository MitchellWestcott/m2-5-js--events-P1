// Exercise 2
//
// 1. Write a function accepts 2 arrays of strings and returns a new combined array of the strings in alphabetical order.
// e.g. combineArrays(["crisp", "bacon"], ['zuchini', 'apple']) returns ['apple', 'bacon', 'crispy', 'zuchini']

// - if any of the values in either array is not strings, return undefined.

const combineArrays = (arr1, arr2) => {
  // Insert missing solution please
  //if (typeof arr1 === "string" && typeof arr2 === "string") {
  let finalArr = arr1.concat(arr2).sort();

  let isString = finalArr.every((element) => {
    if (typeof element === "string") {
      return true;
    }
  });
  if (isString) {
    return finalArr;
  } else {
    return undefined;
  }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = combineArrays;
