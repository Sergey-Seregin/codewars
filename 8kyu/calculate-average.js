// DESCRIPTION:
//
//     Write a function which calculates the average of the numbers in a given array.
//
//     Note: Empty arrays should return 0.
//
// SOLUTION:
function findAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((a, b) => a + b) / array.length;
}

console.log("findAverage: ", findAverage( [2, 5, 7, 8]))
