//   +====================================================+
//   |                 WRITE YOUR CODE HERE               |
//   | Description:                                       |
//   | - This function removes duplicate elements from an |
//   |   array `nums`, and keeps the unique elements      |
//   |   in-place.                                        |
//   |                                                    |
//   | Output:                                            |
//   | - The function returns the new length of the array |
//   |   after duplicates are removed.                    |
//   |                                                    |
//   | Tips:                                              |
//   | - `writePointer` stores where the next unique      |
//   |   element should be placed.                        |
//   | - `readPointer` scans the array for unique         |
//   |   elements.                                        |
//   +====================================================+


function removeDuplicates(array) {
  if (!array.length) return 0;
  let a = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      array[a] = array[i];
      a++;
    }
  }
  return a;
}


// ------------------------------------
//  Test array with no duplicates
// ------------------------------------
let noDups = [1, 2, 3, 4];
console.log("Test array with no duplicates:");
console.log("Before:", noDups);
let lenNoDups = removeDuplicates(noDups);
console.log("After:", noDups.slice(0, lenNoDups));
console.log("Length:", lenNoDups);
console.log("---------------");

// ------------------------------------
//  Test array with duplicates
// ------------------------------------
let withDups = [1, 1, 2, 2, 3];
console.log("Test array with duplicates:");
console.log("Before:", withDups);
let lenWithDups = removeDuplicates(withDups);
console.log("After:", withDups.slice(0, lenWithDups));
console.log("Length:", lenWithDups);
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
let emptyArr = [];
console.log("Test empty array:");
console.log("Before:", emptyArr);
let lenEmpty = removeDuplicates(emptyArr);
console.log("After:", emptyArr.slice(0, lenEmpty));
console.log("Length:", lenEmpty);
console.log("---------------");

// ------------------------------------
//  Test array with all same numbers
// ------------------------------------
let allSame = [3, 3, 3];
console.log("Test array with all same numbers:");
console.log("Before:", allSame);
let lenAllSame = removeDuplicates(allSame);
console.log("After:", allSame.slice(0, lenAllSame));
console.log("Length:", lenAllSame);
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let negNumbers = [-1, -1, 0, 2, 2];
console.log("Test array with negative numbers:");
console.log("Before:", negNumbers);
let lenNeg = removeDuplicates(negNumbers);
console.log("After:", negNumbers.slice(0, lenNeg));
console.log("Length:", lenNeg);
console.log("---------------");

// ------------------------------------
//  Test array with one element
// ------------------------------------
let singleElem = [1];
console.log("Test array with one element:");
console.log("Before:", singleElem);
let lenSingle = removeDuplicates(singleElem);
console.log("After:", singleElem.slice(0, lenSingle));
console.log("Length:", lenSingle);
console.log("---------------");


