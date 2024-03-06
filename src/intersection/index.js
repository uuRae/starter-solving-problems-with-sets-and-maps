// Suppose you were given two arrays, a and b, and you needed to find
// all elements that are present in both arrays.

// One way:
// This JavaScript code iterates through each element e in array a, checks if e is
// present in array b, and adds it to the result array if it is not already there.
// The final result array is then returned.const result = [];

// result = []
// for each element e of a do:
//   search for e in b
//   if e is found in b
//      add e to the result array if it isn't already there
// return result

// for (const e of a) {
//   if (b.includes(e) && !result.includes(e)) {
//     result.push(e);
//   }
// }
// return result;

// -------------------------------------------
// Using a Map, you may be able to improve that running time. Maps are very good at lookups.
// If you were to put all the elements of one array into a Map, then each lookup for that
// element will only take O(1) time. A second improvement is to use a Set to track the common
// elements, because that automatically avoids duplication.

// initialize a new Map
// initialize a new Set
// for each element e of a do:
//   add e to the Map

// for each element e of b do:
//   lookup e in the Map
//   if e is in the Map then
//     add e to the Set
// convert the Set to an array and return

function intersection(a, b) {
  const map = new Map();
  const resultSet = new Set();

  // Populate Map with elements from array a
  for (const e of a) {
    map.set(e, true);
  }

  // Check elements in array b against the Map
  for (const e of b) {
    if (map.has(e)) {
      resultSet.add(e);
    }
  }

  // Convert the Set to an array and return
  const resultArray = Array.from(resultSet);
  return resultArray;
}

module.exports = intersection;
