/** Zips two or more arrays. Arrays must have same length.
 *
 * @example
 * zip([0, 1, 2], ['a', 'b', 'c']) // returns [[0, 'a'], [1, 'b'], [2, 'c']]
 *
 * @throws {TypeError} - If the given arrays are not the same length.
 * */
export function zip(...arrs) {
  /* Check that all arrays have the same length. If not, throw an error. */
  if (allLengthsEqual(...arrs) === false) {
    throw new TypeError('Arrays must have same length.');
  } else {
    let zipped = []; // The resulting zipped array.
    const length = arrs[0].length; // Length of each array.

    /* Create a new array of each array's element at index `i`,
     * and push that array to `zipped`. */
    for (let i = 0; i < length; i++) {
      let col = []; // Array of all each array's element at index `i`
      for (let arr of arrs) {
        col.push(arr[i]); // Push the ith element of each array to `col`.
      }
      zipped.push(col);
    }
    return zipped;
  }
}

/** Checks whether the given arrays all have the same length. */
function allLengthsEqual(...arrs) {
  /* Array containing each array's length. */
  const lengths = arrs.map(arr => arr.length);
  /* Check that every length is equal to the first array's length (thus all
   * arrays have the same length). */
  return lengths.every((length) => length === lengths[0]);
}