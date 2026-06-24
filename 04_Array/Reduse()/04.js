//Flatten nested arrays

let nested = [[1, 2], [3, 4], [5]];
let flat = nested.reduce((acc, val) => acc.concat(val), []);

console.log(flat); // Output: [1, 2, 3, 4, 5]


