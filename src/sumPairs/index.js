/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */

// for each element i in the array do:
//   for each element j in the array do:
//     if i is not equal to j then
//        if i + j is equal to the value
//           add [i, j] to the output

// function findPairsWithSum(array, targetValue) {
//   const output = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j && array[i] + array[j] === targetValue) {
//         output.push([array[i], array[j]]);
//       }
//     }
//   }
//   return output;
// }

// It should be clear that due to the nested for loops in this solution, the running time is O(n²).
// ---------------------------------------
// Map:
// inputs: an array of numbers named A
//         a target value named N
// initialize a new Map named numbers
// initialize a new Map named solution
// for each element e in A do:
//    add e to numbers
// for each element e in A do;
//   calculate diff = N - e
//   if diff is not equal to e then  (1)
//      look up diff in numbers
//      if diff is in numbers then
//        add [e, diff] to solution (2)
// convert solution to an array and return it

// There are two points to notice about the above algorithm:
// The check on the line marked (1) ensures that you do not end up with a number paired with itself, like [5, 5].
// As the line marked (2) is written, it will probably result in both [3, 7] and [7, 3] in the solution.
// You may want to set the minimum of the two numbers as the key and the other number as the value in the solution Map.

// This algorithm has a running time of O(n).

function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();

  // Populate the 'numbers' Map with elements from array A
  for (const e of A) {
    numbers.set(e, true);
  }

  // Find pairs that add up to the target value N
  for (const e of A) {
    const diff = N - e;

    // Check condition (1)
    if (diff !== e) {
      // Check condition (2)
      if (numbers.has(diff)) {
        solution.set(Math.min(e, diff), Math.max(e, diff));
      }
    }
  }

  return Array.from(solution);
}

module.exports = sumPairs;
