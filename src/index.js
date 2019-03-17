/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {    
    // your implementation
    let counter = 0;
    for (let i = 0; i < preferences.length; i++) {
        let one = preferences[i] - 1;
        let two = preferences[one] - 1;
        let three = preferences[two] - 1;
        if (three == i) counter++;
     }
     return Math.floor(counter / 3);
  };