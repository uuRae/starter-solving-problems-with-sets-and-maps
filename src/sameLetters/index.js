/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */

// The characters in the keys should be ordered in alphabetical order, and this should be a case-
// insensitive search. Using Maps, Sets, and arrays will greatly simplify the approach to solving this problem.

// The first problem to solve is to determine if a word belongs to a particular group or not. One option is to rearrange
// all the unique characters in the word into alphabetical order, and then compare it to the existing keys in the Map.

// If the key exists, then at least one other word with those same letters was found,
// so you can add this word to the array associated with that key.

// If the key isn't found, then this is the first word made up of those letters that was found. So add that key and word to the Map.

// Using pseudocode, the algorithm may look like this:

// Input: an array of words named words

// instantiate a new Map named results

// for each word in the words array do:
//   lowercase word
//   find all unique letters in word
//     create a Set with all the letters of the word to remove duplicates
//     create an array of letters from the Set and sort alphabetically
//     use join to create a string from the array
//   if the sorted string of letters is a key in the results Map then
//     add word to the array associated with that key
//   else
//     make a new entry in the results Map with key = sorted string of letters and the value an array with word as its only element
// return the results Map

function sameLetters(words) {
  const results = new Map();

  for (const word of words) {
    // Lowercase the word
    const lowercaseWord = word.toLowerCase();

    // Find all unique letters in the word
    const uniqueLetters = Array.from(new Set(lowercaseWord)).sort();

    // Create a string from the sorted array of letters
    const sortedLettersString = uniqueLetters.join("");

    // Check if the sorted string of letters is a key in the results Map
    if (results.has(sortedLettersString)) {
      // Add the word to the array associated with that key
      results.get(sortedLettersString).push(word);
    } else {
      // Make a new entry in the results Map
      results.set(sortedLettersString, [word]);
    }
  }

  // Return the results Map
  return results;
}

module.exports = sameLetters;
