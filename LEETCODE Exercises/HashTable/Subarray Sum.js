//   +=====================================================+
//   |               WRITE YOUR CODE HERE                  |
//   | Description:                                        |
//   | - This function finds a subarray that sums up to    |
//   |   the target value.                                 |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array with the start and end indices   |
//   |   of the subarray.                                  |
//   | - Returns an empty array if no such subarray exists.|
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to track    |
//   |   the sums and their indices.                       |
//   | - Example with Map:                                 |
//   |   sumIndex.set(currentSum, i);                      |
//   | - Example with object:                              |
//   |   sumIndex[currentSum] = i;                         |
//   +=====================================================+


// const subarraySum = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     let sum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       sum += array[j];
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

function subarraySum(nums, target) {
  const sumIndex = {};
  sumIndex[0] = -1;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (sumIndex.hasOwnProperty(currentSum - target)) {
      return [sumIndex[currentSum - target] + 1, i];
    }

    sumIndex[currentSum] = i;
  }

  return [];
}


// ---------------
// Positive Numbers
// ---------------
console.log("Positive Numbers:");
console.log("Input: [2, 4, 6, 3], Target: 10");
console.log("Output: ", JSON.stringify(subarraySum([2, 4, 6, 3], 10)));
console.log("---------------");

// ---------------
// Includes Zero
// ---------------
console.log("Includes Zero:");
console.log("Input: [1, 2, 3, 0, 4], Target: 6");
console.log("Output: ", JSON.stringify(subarraySum([1, 2, 3, 0, 4], 6)));
console.log("---------------");

// ---------------
// Negative Numbers
// ---------------
console.log("Negative Numbers:");
console.log("Input: [1, -1, 2, 3], Target: 4");
console.log("Output: ", JSON.stringify(subarraySum([1, -1, 2, 3], 4)));
console.log("---------------");

// ---------------
// No Subarray
// ---------------
console.log("No Subarray:");
console.log("Input: [1, 2, 3, 4], Target: 10");
console.log("Output: ", JSON.stringify(subarraySum([1, 2, 3, 4], 10)));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: [], Target: 1");
console.log("Output: ", JSON.stringify(subarraySum([], 1)));
console.log("---------------");


